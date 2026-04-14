export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const key = process.env.RAPIDAPI_KEY;
  if (!key) return res.status(500).json({ error: 'RAPIDAPI_KEY not set' });

  const url = `https://transfermarkt-football-data-api.p.rapidapi.com/api/v1/clubs/6643/players`;
  const response = await fetch(url, {
    headers: {
      'x-rapidapi-host': 'transfermarkt-football-data-api.p.rapidapi.com',
      'x-rapidapi-key': key,
    }
  });
  const data = await response.json();
  res.setHeader('Cache-Control', 's-maxage=3600');
  return res.status(200).json(data);
}
