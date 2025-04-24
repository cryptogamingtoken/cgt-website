// pages/api/claim.js

let claimedWallets = new Set(); // In-memory session (resets on dev server restart)

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cookie = req.headers.cookie || '';
  const match = cookie.match(/mockSession=([^;]+)/);

  if (!match) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  try {
    const session = JSON.parse(decodeURIComponent(match[1]));
    const address = session.address;

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      return res.status(400).json({ error: 'Invalid address in session' });
    }

    if (claimedWallets.has(address)) {
      return res.status(409).json({ error: 'Already claimed' });
    }

    claimedWallets.add(address);

    // Simulate a fake tx hash
    const txHash = `0x${crypto.randomUUID().replace(/-/g, '').slice(0, 64)}`;

    return res.status(200).json({ txHash });
  } catch (err) {
    return res.status(400).json({ error: 'Malformed session cookie' });
  }
}
