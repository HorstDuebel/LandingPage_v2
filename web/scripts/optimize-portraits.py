from PIL import Image, ImageDraw
from pathlib import Path

public = Path(r"D:\Eigene Datein\KI_Projekte\LandingPage_v3\web\public")
docs = Path(r"D:\Eigene Datein\KI_Projekte\LandingPage_v3\web\docs")

# surface-teal: color-mix(#7aafa1 16%, white) – passt zum Expertise-Hintergrund
TEAL = (234, 242, 240, 255)
SIZE = 1200
MAX_KB = 260


def rebuild_circle(src: Path, dst: Path, fill_rgba: tuple[int, int, int, int]) -> None:
    # Leicht zoomen: schwarzen Rand der Rund-Quelle nach außen schieben
    img = Image.open(src).convert("RGBA")
    scale = 1.12 if "susanne" in src.name.lower() or "Volkwein" in src.name else 1.10
    big = int(round(SIZE * scale))
    img = img.resize((big, big), Image.Resampling.LANCZOS)
    left = (big - SIZE) // 2
    top = (big - SIZE) // 2
    img = img.crop((left, top, left + SIZE, top + SIZE))

    ss = 4
    mask_big = Image.new("L", (SIZE * ss, SIZE * ss), 0)
    draw = ImageDraw.Draw(mask_big)
    pad = int(2 * ss)
    draw.ellipse((pad, pad, SIZE * ss - pad - 1, SIZE * ss - pad - 1), fill=255)
    mask = mask_big.resize((SIZE, SIZE), Image.Resampling.LANCZOS)

    base = Image.new("RGBA", (SIZE, SIZE), fill_rgba)
    base.paste(img, (0, 0), mask=mask)
    out = base.convert("RGB")

    quality = 95
    while quality >= 80:
        out.save(dst, "WEBP", quality=quality, method=6)
        size_kb = dst.stat().st_size / 1024
        print(f"{dst.name}: {SIZE}px q={quality} -> {size_kb:.1f} KB")
        if size_kb <= MAX_KB:
            break
        quality -= 3
    if dst.stat().st_size / 1024 > MAX_KB:
        raise SystemExit(f"{dst.name} still too large")


# Frank: hochwertige Rund-Quelle aus docs
frank_src = docs / "Frank_Rund.png"
if not frank_src.exists():
    frank_src = Path(r"D:\Eigene Datein\KI_Projekte\LandingPage_v3\Dokumente\frank.png")
rebuild_circle(frank_src, public / "frank.webp", TEAL)

# Susanne: hochwertige Rund-Quelle aus Dokumente
susanne_src = Path(
    r"D:\Eigene Datein\KI_Projekte\LandingPage_v3\Dokumente\SusanneVolkwein_Bild-rund.png"
)
# surface-warm: color-mix(#7b7163 12%, white) – Team-Abschnitt KI-Salon
WARM = (239, 238, 236, 255)
rebuild_circle(susanne_src, public / "susanne-volkwein.webp", WARM)

print("done")
