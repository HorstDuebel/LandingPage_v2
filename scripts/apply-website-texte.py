"""Wendet geänderte Texte aus website-texte.xlsx auf den Code an."""

from __future__ import annotations

import re
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parents[1]
XLSX = ROOT / "website-texte.xlsx"

FILE_MAP = {
    "layout.tsx": ROOT / "web" / "src" / "app" / "layout.tsx",
    "page.tsx": ROOT / "web" / "src" / "app" / "page.tsx",
    "copy.ts": ROOT / "web" / "src" / "lib" / "copy.ts",
    "site-chrome.tsx": ROOT / "web" / "src" / "components" / "site-chrome.tsx",
    "termin/page.tsx": ROOT / "web" / "src" / "app" / "termin" / "page.tsx",
    "impressum/page.tsx": ROOT / "web" / "src" / "app" / "impressum" / "page.tsx",
    "datenschutz/page.tsx": ROOT / "web" / "src" / "app" / "datenschutz" / "page.tsx",
}


def fix_typos(text: str) -> str:
    text = text.replace("Optemierungen", "Optimierungen")
    text = text.replace("Automatiesierungen", "Automatisierungen")
    text = text.replace("höhre", "höre")
    text = text.replace("wollen:  ver", "wollen: ver")
    return text


def resolve_file(source: str) -> Path | None:
    for key, path in FILE_MAP.items():
        if source.startswith(key):
            return path
    return None


def main() -> None:
    wb = openpyxl.load_workbook(XLSX, data_only=True)
    rows = list(wb.active.iter_rows(min_row=2, values_only=True))

    by_file: dict[Path, list[tuple[str, str, str]]] = {}
    skipped = 0

    for row in rows:
        source = str(row[0] or "").strip()
        old = str(row[1] or "").strip()
        new = fix_typos(str(row[2] or "").strip())
        if not source or not old or not new or old == new:
            continue
        path = resolve_file(source)
        if not path:
            print(f"SKIP unbekannte Quelle: {source}")
            skipped += 1
            continue
        by_file.setdefault(path, []).append((source, old, new))

    failed: list[str] = []
    applied = 0

    for path, changes in by_file.items():
        content = path.read_text(encoding="utf-8")
        original = content
        for source, old, new in changes:
            if old not in content:
                # Fallback: normalisiere typografische Striche
                old_norm = old.replace("‑", "-").replace("–", "-").replace("—", "-")
                content_norm = content.replace("‑", "-").replace("–", "-").replace("—", "-")
                if old_norm in content_norm:
                    # Ersetze an der Stelle im Original via Regex mit flexiblen Bindestrichen
                    pattern = re.escape(old)
                    pattern = pattern.replace(r"\‑", r"[\-‑–—]").replace(r"\–", r"[\-‑–—]").replace(r"\—", r"[\-‑–—]")
                    match = re.search(pattern, content)
                    if match:
                        content = content[: match.start()] + new + content[match.end() :]
                        applied += 1
                        continue
                failed.append(f"{path.name} | {source}\n  ALT nicht gefunden: {old[:80]}...")
                continue
            content = content.replace(old, new, 1)
            applied += 1

        if content != original:
            path.write_text(content, encoding="utf-8")
            print(f"OK {path.relative_to(ROOT)} ({len(changes)} Änderungen)")

    print(f"\nAngewendet: {applied}")
    if failed:
        fail_path = ROOT / "scripts" / "apply-failed.txt"
        fail_path.write_text("\n\n".join(failed), encoding="utf-8")
        print(f"FEHLGESCHLAGEN: {len(failed)} (siehe {fail_path})")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
