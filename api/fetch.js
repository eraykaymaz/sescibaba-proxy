export default async function handler(req, res) {
    const url = req.query.url;

    if (!url) {
        return res.status(400).send("Missing URL");
    }

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3",
                "Referer": "https://www.google.com/",
            }
        });

        const html = await response.text();
        res.status(200).send(html);

    } catch (err) {
        res.status(500).send("Fetch error");
    }
}
