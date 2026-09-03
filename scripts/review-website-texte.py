"""Liest website-texte.xlsx und erstellt eine Prüf-Übersicht."""

from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parents[1]
XLSX = ROOT / "website-texte.xlsx"
OUT = ROOT / "scripts" / "texte-review.txt"


def main() -> None:
    wb = openpyxl.load_workbook(XLSX, data_only=True)
    ws = wb.active
    rows = list(ws.iter_rows(min_row=2, values_only=True))

    changed: list[tuple[int, str, str, str]] = []
    same: list[tuple[int, str]] = []
    empty: list[tuple[int, str]] = []
    issues: list[str] = []

    for i, row in enumerate(rows, start=2):
        src = str(row[0] or "").strip()
        old = str(row[1] or "").strip()
        new = str(row[2] or "").strip()

        if not src:
            issues.append(f"Zeile {i}: Quelle (Spalte A) fehlt")
            continue
        if not old:
            issues.append(f"Zeile {i}: Alter Text (Spalte B) fehlt – Quelle: {src}")
        if not new:
            empty.append((i, src))
            continue
        if new == old:
            same.append((i, src))
        else:
            changed.append((i, src, old, new))

    # Konsistenz: 45 vs 30 Minuten in geänderten Texten
    minute_rows = [c for c in changed if "minute" in c[3].lower() or "minute" in c[2].lower()]
    has_45 = [c for c in changed if "45" in c[3]]
    has_30 = [c for c in changed if "30" in c[3] and "minute" in c[3].lower()]

    lines = [
        f"Datei: {XLSX}",
        f"Sheet: {ws.title}",
        f"Zeilen gesamt: {len(rows)}",
        f"Spalte C ausgefüllt: {len(rows) - len(empty)}",
        f"Spalte C leer: {len(empty)}",
        f"Geändert (C ≠ B): {len(changed)}",
        f"Unverändert (C = B): {len(same)}",
        "",
    ]

    if empty:
        lines.append("=== LEERE ZEILEN (Spalte C) ===")
        for i, src in empty:
            lines.append(f"Zeile {i}: {src}")
        lines.append("")

    if issues:
        lines.append("=== PROBLEME ===")
        lines.extend(issues)
        lines.append("")

    lines.append("=== MINUTEN-KONSISTENZ (geänderte Zeilen) ===")
    lines.append(f"Geänderte Zeilen mit '45' in Spalte C: {len(has_45)}")
    for i, src, _old, new in has_45:
        lines.append(f"  Zeile {i} | {src} | {new}")
    lines.append(f"Geänderte Zeilen mit '30' + 'Minute' in Spalte C: {len(has_30)}")
    for i, src, _old, new in has_30:
        lines.append(f"  Zeile {i} | {src} | {new}")
    lines.append("")

    lines.append("=== ALLE GEÄNDERTEN TEXTE ===")
    for i, src, old, new in changed:
        lines.append(f"--- Zeile {i} ---")
        lines.append(f"Quelle: {src}")
        lines.append(f"ALT: {old}")
        lines.append(f"NEU: {new}")
        lines.append("")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Review: {OUT}")
    print(f"Geändert: {len(changed)} | Unverändert: {len(same)} | Leer: {len(empty)}")


if __name__ == "__main__":
    main()
