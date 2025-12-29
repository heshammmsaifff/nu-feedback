require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;

// مصفوفة لتخزين الـ chat_id المصرح لهم
let authorized = [];

// إنشاء البوت
const bot = new TelegramBot(token, { polling: true });

// أول ما يكتب /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  if (!authorized.includes(chatId)) {
    authorized.push(chatId);
    bot.sendMessage(chatId, "👋 أهلاً! تم تفعيل البوت وهتستقبل الرسائل هنا ✅");
  } else {
    bot.sendMessage(chatId, "✔️ انت بالفعل مفعّل وهتستقبل الرسائل.");
  }
});

// تسجيل الخروج
bot.onText(/\/logout/, (msg) => {
  const chatId = msg.chat.id;
  authorized = authorized.filter((id) => id !== chatId);
  bot.sendMessage(chatId, "🚪 تم تسجيل خروجك. مش هتستقبل رسائل جديدة.");
});

// أي رسالة غير الأوامر → لوج بس
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.trim();

  if (authorized.includes(chatId)) {
    if (text !== "/start" && text !== "/logout") {
      console.log(`📩 رسالة من ${msg.from.first_name}: ${text}`);
    }
  }
});

// دالة ترجع المستخدمين المصرح لهم
function getAuthorizedUsers() {
  return authorized;
}

module.exports = { bot, getAuthorizedUsers };
