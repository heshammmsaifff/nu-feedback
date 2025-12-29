import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const data = { name, phone, message };

    try {
      await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      router.push("/after-contact");
    } catch (err) {
      console.error("Error sending message:", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-start px-6 py-12 font-[Cairo] overflow-hidden">
      {/* الخلفية الموحدة */}
      <div className="absolute inset-0 z-0 bg-main-gradient" />

      {/* المحتوى */}
      <div className="relative z-10 w-full max-w-md">
        {/* زر العودة واللوجو */}
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={() => router.back()}
            className="p-3 rounded-full bg-[#3e2a1b]/5 text-[#3e2a1b] hover:bg-[#3e2a1b]/10 transition-colors"
          >
            <FaArrowRight />
          </button>
          <img
            src="/logo.png"
            alt="logo"
            className="w-16 h-16 rounded-xl shadow-lg object-contain bg-white/50 p-1"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[#3e2a1b] mb-2">
            يسعدنا سماع رأيك
          </h2>
          <p className="text-[#3e2a1b]/60">
            ملاحظاتك تساعدنا على تقديم تجربة أفضل في NU
          </p>
        </motion.div>

        {/* الفورم بتصميم عصري */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم"
              className="w-full p-4 rounded-2xl bg-[#fcfaf7] border border-[#3e2a1b]/10 text-[#3e2a1b] shadow-sm focus:ring-2 focus:ring-[#b98d50] focus:outline-none transition-all placeholder:text-[#3e2a1b]/40"
              required
            />
          </div>

          <div className="space-y-1">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              placeholder="رقم الموبايل"
              className="w-full p-4 rounded-2xl bg-[#fcfaf7] border border-[#3e2a1b]/10 text-[#3e2a1b] shadow-sm focus:ring-2 focus:ring-[#b98d50] focus:outline-none transition-all placeholder:text-[#3e2a1b]/40"
              required
              dir="rtl"
              maxLength={11}
              pattern="[0-9]{11}"
            />
          </div>

          <div className="space-y-1">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا.. نحن نهتم بكل التفاصيل"
              className="w-full h-40 p-4 rounded-2xl bg-[#fcfaf7] border border-[#3e2a1b]/10 text-[#3e2a1b] shadow-sm focus:ring-2 focus:ring-[#b98d50] focus:outline-none transition-all placeholder:text-[#3e2a1b]/40 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`relative mt-4 w-full h-[60px] font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center overflow-hidden
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#3e2a1b] text-[#f1d7a5] hover:bg-[#523723] active:scale-95"
              }`}
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <svg
                  className="animate-spin h-5 w-5 text-[#f1d7a5]"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                <span>يتم الإرسال..</span>
              </div>
            ) : (
              <span className="text-lg">إرسال الملاحظة</span>
            )}
          </button>
        </form>
      </div>

      {/* لمسات جمالية خفيفة */}
      <div className="absolute top-[-5%] right-[-10%] w-64 h-64 bg-[#d9b782]/10 blur-[80px] rounded-full pointer-events-none" />
    </div>
  );
}

export default Contact;
