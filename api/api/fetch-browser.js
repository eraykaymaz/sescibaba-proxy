import playwright from "playwright";

export default async function handler(req, res) {
    const url = req.query.url;

    if (!url) {
        return res.status(400).send("URL eksik");
    }

    try {
        const browser = await playwright.chromium.launch({
            headless: true,
        });

        const page = await browser.newPage({
            userAgent:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
        });

        await page.goto(url, { waitUntil: "networkidle" });

        const html = await page.content();

        await browser.close();

        res.status(200).send(html);

    } catch (e) {
        res.status(500).send("Browser fetch error: " + e.message);
    }
}
