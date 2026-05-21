export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { messages } = req.body;
  const response = await fetch("https://api.polza.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.POLZA_API_KEY}`,
    },
    body: JSON.stringify({ model: "openai/gpt-4o", messages, max_tokens: 600 }),
  });
  const data = await response.json();
  res.json(data);
}
