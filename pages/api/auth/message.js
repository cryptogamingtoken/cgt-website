// pages/api/auth/message.js
export default function handler(req, res) {
    const { address } = req.query;
    const message = `Welcome to CryptoGamingToken! Sign this to log in. Address: ${address}`;
    res.status(200).json({ message });
  }
  