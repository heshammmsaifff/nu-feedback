import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function AfterContact() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 font-[Cairo] overflow-hidden">
      {/* الخلفية الموحدة التي تضمن تناسق الهوية */}
      <div className="absolute inset-0 z-0 bg-main-gradient" />

      {/* محتوى رسالة النجاح */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center max-w-sm"
      >
        {/* أيقونة تأكيد ناعمة */}
        <motion.div
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8 text-[#3e2a1b]/20"
        >
          <FaCheckCircle size={80} className="text-[#b98d50]" />
        </motion.div>

        {/* الشعار مصغر */}
        <img
          src="/logo.png"
          alt="logo"
          className="w-20 rounded-2xl shadow-lg mb-6 opacity-90"
        />

        <h1 className="text-3xl font-bold text-[#3e2a1b] mb-4">
          وصلتنا رسالتك..
        </h1>

        <p className="text-[#3e2a1b]/70 text-lg mb-10 leading-relaxed">
          شكراً لوقتك ومشاركتنا رأيك. نحن نقدر ملاحظاتك جداً وسنعمل عليها لنرتقي
          دائماً بتجربتك في <span className="font-bold text-[#3e2a1b]">NU</span>
          .
        </p>

        {/* زر العودة للرئيسية */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full"
        >
          <Link
            href="/"
            className="flex items-center justify-center w-full h-[60px] bg-[#3e2a1b] text-[#f1d7a5] font-bold rounded-2xl shadow-xl hover:bg-[#523723] transition-all"
          >
            العودة للرئيسية
          </Link>
        </motion.div>
      </motion.div>

      {/* تأثيرات بصرية خلفية (Light Blobs) */}
      <div className="absolute top-[20%] left-[-20%] w-80 h-80 bg-[#d9b782]/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-64 h-64 bg-[#3e2a1b]/5 blur-[100px] rounded-full" />
    </div>
  );
}

export default AfterContact;
