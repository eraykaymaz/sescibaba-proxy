export default async function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: "URL missing" });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    const html = await response.text();
    res.status(200).send(html);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed", details: err.message });
  }
}
