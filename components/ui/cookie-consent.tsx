"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const declineCookies = () => {
    // Still set it so we don't bother them again, but you could handle this differently
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-slate-900/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-slate-700 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-start md:items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">เว็บไซต์นี้ใช้คุกกี้ (Cookies)</h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  เราใช้คุกกี้เพื่อเพิ่มประสบการณ์ที่ดีในการใช้เว็บไซต์ 
                  แสดงเนื้อหาและโฆษณาให้ตรงกับความสนใจ รวมถึงเพื่อวิเคราะห์การเข้าใช้งานเว็บไซต์ 
                  การกด "ยอมรับ" ถือว่าคุณยินยอมให้เราใช้คุกกี้ตามนโยบายความเป็นส่วนตัวของเรา
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto relative z-10">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors text-sm font-semibold"
              >
                ปฏิเสธ
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-lg shadow-blue-500/20 text-sm font-semibold"
              >
                ยอมรับทั้งหมด
              </button>
              <button 
                onClick={declineCookies}
                className="hidden md:flex absolute -top-2 -right-2 p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
