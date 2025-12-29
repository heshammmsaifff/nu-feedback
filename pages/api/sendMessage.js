export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, message } = req.body;
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

    const chatIds = ["6960214970", "8200195632"]; // Allowed to see messages in bot

    const text = `📩 رسالة جديدة:\n\n\n الاسم: ${name}\n\n رقم الموبايل: ${phone}\n\n الرسالة:\n${message}`;

    try {
      await Promise.all(
        chatIds.map((chatId) =>
          fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text }),
          })
        )
      );

      res.status(200).json({ ok: true });
    } catch (error) {
      console.error("Telegram API error:", error);
      res.status(500).json({ ok: false, error: "Failed to send message" });
    }
  } else {
    res.status(405).json({ ok: false, error: "Method not allowed" });
  }
}
