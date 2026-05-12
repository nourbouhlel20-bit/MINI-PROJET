export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, message } = req.body

  return res.status(200).json({
    success: true,
    reply: `Merci ${name || 'utilisateur'} ! Votre message a bien été reçu.`,
    received: {
      name,
      message
    }
  })
}
