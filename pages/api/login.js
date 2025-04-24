export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { address } = req.body;
  
    if (!address || !/^0x[a-fA-F0-9]{40}$/.test(address)) {
      return res.status(400).json({ error: 'Invalid address format' });
    }
  
    const cookieValue = JSON.stringify({ address });
  
    const isProd = process.env.NODE_ENV === 'production';
  
    res.setHeader('Set-Cookie', [
      `mockSession=${encodeURIComponent(cookieValue)}; Path=/; HttpOnly; Max-Age=86400; SameSite=Lax${isProd ? '; Secure' : ''}`,
    ]);
  
    return res.status(200).json({ message: 'Login successful', address });
  }
  