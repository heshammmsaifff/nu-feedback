import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaChevronLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-between font-[Cairo] overflow-hidden">
      {/* تطبيق التدرج اللوني الذي عرفته في CSS */}
      <div className="absolute inset-0 z-0 bg-main-gradient" />

      {/* المحتوى العلوي */}
      <div className="relative z-10 flex flex-col items-center pt-16 px-6 w-full max-w-lg">
        {/* إطار الشعار بتصميم زجاجي ناعم */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-white/20 blur-2xl rounded-full group-hover:bg-white/30 transition duration-1000"></div>
          <img
            src="/logo.png"
            alt="NU Cafe"
            className="relative h-48 w-48 object-contain rounded-[40px] shadow-2xl border border-white/10"
          />
        </motion.div>

        {/* النص الترحيبي */}
        <motion.div
          className="text-center mt-12 space-y-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-[#3e2a1b]">
            NU CAFE
          </h1>
          <p className="text-[#3e2a1b]/70 text-lg font-medium">
            حيث يلتقي الهدوء بالقهوة المختصة
          </p>
        </motion.div>

        {/* منطقة الأزرار - تصميم عريض وفاخر */}
        <motion.div
          className="w-full mt-16 space-y-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="group flex items-center justify-between w-full px-8 py-5 bg-[#3e2a1b] text-[#f1d7a5] rounded-2xl shadow-[0_15px_30px_rgba(62,42,27,0.3)] hover:bg-[#523723] transition-all active:scale-[0.98]"
          >
            <span className="text-xl font-bold">الإقتراحات والشكاوي</span>
            <div className="bg-[#f1d7a5] text-[#3e2a1b] p-2 rounded-full group-hover:translate-x-[-5px] transition-transform">
              <FaChevronLeft size={16} />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* التذييل (Footer) والأيقونات */}
      <footer className="relative z-10 w-full pb-10 mt-10 flex flex-col items-center">
        <div className="flex gap-10">
          <SocialLink href="#" icon={<FaInstagram />} label="Instagram" />
          <SocialLink href="#" icon={<FaTiktok />} label="TikTok" />
          <SocialLink href="#" icon={<FaFacebookF />} label="Facebook" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="mt-8 text-xs text-[#3e2a1b] uppercase tracking-widest"
        >
          © 2024 NU CAFE • Premium Experience
        </motion.p>
      </footer>

      {/* لمسة ديكورية: دوائر مضيئة في الخلفية */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#d9b782]/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-[#3e2a1b]/10 blur-[100px] rounded-full" />
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      className="text-[#3e2a1b] text-2xl hover:text-[#b98d50] transform hover:scale-125 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
