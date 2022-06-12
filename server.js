const puppeteer = require("puppeteer");

async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("span [title='Namish']");
    const target = await page.$("span [title='Namish']");
    await target.click();
    const inp = await page.$(
        "._1LbR4 > div:nth-child(2)"
    );

    for (let i = 0; i < 200; i++) {
        await inp.type("Bruh");
        await page.keyboard.press("Enter");
    }
}

scrape("https://web.whatsapp.com");