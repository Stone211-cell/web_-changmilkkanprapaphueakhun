"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Review() {
  return (
    <div className="py-24 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="mb-16 text-center px-4 relative z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wider uppercase">
          คำยืนยันจากลูกค้า
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          รีวิวความประทับใจ <span className="text-blue-600 italic">จากผู้ใช้งานจริง</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          เรามุ่งมั่นให้บริการด้วยมาตรฐานสูงสุด เพื่อให้ลูกค้าพึงพอใจในทุกผลงาน
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="w-full"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "งานดีจริงๆครับ ผมเคยให้ช่างคนนึงซ่อมท่อน้ำตั้งแต่ 2 ปีก่อน ผลคือพังซ่อมใหม่แล้วซ่อมใหม่อีก ก็พังเหมือนเดิม จนมาเจอช่างมิล สุภาพใจดีมากครับ แล้วผมจ้างซ่อมท่อเดิม จนปัจจุบันผ่านมา 2 ปีท่อยังใช้งานได้ปกติครับ และพึ่งจ้างงานให้ติดตั้งปั้มน้ำ ผลงานไม่ผิดหวังจริงๆครับคุ้มค่ามากๆ",
    name: "สุวภัทร จาตุรัญสมบูรณ์",
    title: "รีวิว 5/5 ดาว",
  },
  {
    quote:
      "ช่างบริการดีมากค่ะ พูดจาไพเราะ ราคาไม่แพง",
    name: "นฤมล สีดาพล",
    title: "รีวิว 5/5 ดาว",
  },
  {
    quote:
      "ช่างซ่อมงานดีมากครับ ไว้ดอกาสหน้าจะจ้างอีก",
    name: "นุกูล",
    title: "รีวิว 5/5 ดาว",
  },
  {
    quote:
      "ช่างพูดไพเราะมากค่ะ ปรึกษาถามคำถามซัพพอร์ตดีมาก",
    name: "กมลชนก",
    title: "รีวิว 5/5 ดาว",
  },

];
