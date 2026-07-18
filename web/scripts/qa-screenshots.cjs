const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

(async () => {
  const out = path.resolve("public/brand/qa");
  fs.mkdirSync(out, { recursive: true });
  const base = "http://localhost:3001/";

  async function shots(page, prefix) {
    await page.goto(base, { waitUntil: "networkidle" });
    await page.waitForTimeout(700);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(out, `${prefix}-hero.png`) });

    await page.locator("#angebot").scrollIntoViewIfNeeded();
    await page.waitForTimeout(350);
    await page.screenshot({ path: path.join(out, `${prefix}-angebot.png`) });

    await page.locator("#faq").scrollIntoViewIfNeeded();
    await page.waitForTimeout(350);
    await page.screenshot({ path: path.join(out, `${prefix}-faq.png`) });

    await page.locator("#termin").scrollIntoViewIfNeeded();
    await page.waitForTimeout(350);
    await page.screenshot({
      path: path.join(out, `${prefix}-abschluss-cta.png`),
    });

    await page.locator(".site-footer").scrollIntoViewIfNeeded();
    await page.waitForTimeout(350);
    await page.screenshot({ path: path.join(out, `${prefix}-footer.png`) });

    return page.evaluate(() => {
      const grid = document.querySelector(".offer-grid");
      const cols = grid
        ? getComputedStyle(grid).gridTemplateColumns.trim().split(/\s+/).length
        : 0;
      const plus = document.querySelector(
        "#faq details summary span.transition-transform"
      );
      return {
        width: innerWidth,
        offerCols: cols,
        lockupOk: !!document.querySelector(".brand-signature"),
        footerBg: getComputedStyle(document.querySelector(".site-footer"))
          .backgroundColor,
        finalCtaBg: getComputedStyle(document.querySelector(".final-cta"))
          .backgroundColor,
        faqPlus: plus ? getComputedStyle(plus).color : null,
        btnBg: getComputedStyle(document.querySelector(".btn-primary"))
          .backgroundColor,
        btnColor: getComputedStyle(document.querySelector(".btn-primary")).color,
      };
    });
  }

  const browser = await chromium.launch({ headless: true });
  const desk = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const deskFacts = await shots(desk, "desktop");
  await desk.close();

  const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const mobFacts = await shots(mob, "mobile");
  await mob.close();
  await browser.close();

  fs.writeFileSync(
    path.join(out, "qa-notes.json"),
    JSON.stringify({ deskFacts, mobFacts }, null, 2)
  );
  console.log(JSON.stringify({ deskFacts, mobFacts }, null, 2));
  console.log(fs.readdirSync(out).join(", "));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
