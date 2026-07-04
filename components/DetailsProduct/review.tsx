"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Review() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="mb-8 sm:mb-12 md:mb-16 text-center px-4 relative z-10">
        <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase">
          คำยืนยันจากลูกค้า
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
          รีวิวความประทับใจ <span className="text-blue-600 italic">จากผู้ใช้งานจริงบน Google Maps</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
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
      "งานดีจริงๆครับ ผมเคยให้ช่างคนนึงซ่อมท่อน้ำตั้งแต่ 2 ปีก่อน ผลคือพังซ่อมใหม่แล้วซ่อมใหม่อีก ก็พังเหมือนเดิม จนมาเจอช่างมิล สุภาพใจดีมากครับ แล้วผมจ้างซ่อมท่อเดิม จนปัจจุบันผ่านมา 2 ปีท่อยังใช้งานได้ปกติครับ คุ้มค่ามากๆ แนะนำเลยครับ",
    name: "สุวภัทร จาตุรัญสมบูรณ์",
    title: "รีวิวบน Google Maps",
  },
  {
    quote:
      "ท่อน้ำทิ้งตัน น้ำเอ่อล้น ช่างมิลมาไวมากครับ ใช้เครื่องทะลวงแป๊บเดียวเสร็จเลย ไม่ต้องทุบพื้นให้เสียเวลา ราคาคุยกันก่อนเริ่มงาน ไม่มีบวกเพิ่ม ประทับใจมากครับ",
    name: "วรเมธ",
    title: "Local Guide",
  },
  {
    quote:
      "ปั๊มน้ำที่บ้านดังตลอดเวลา ค่าน้ำพุ่งปรี๊ด ให้ช่างมิลมาเช็คให้ สรุปเจอจุดรั่วใต้พื้นดิน ช่างมีเครื่องมือฟังเสียงน้ำรั่ว หาเจอแม่นยำมาก ซ่อมเสร็จค่าน้ำกลับมาปกติเลยค่ะ",
    name: "นฤมล สีดาพล",
    title: "รีวิวบน Google Maps",
  },
  {
    quote:
      "ช่างบริการดีมากค่ะ พูดจาไพเราะ ให้คำปรึกษาดีมากๆ งานเรียบร้อย สะอาด เก็บงานเนี๊ยบ ใครหาช่างประปาเก่งๆ แนะนำเจ้านี้เลยค่ะ ไม่ผิดหวังแน่นอน",
    name: "กมลชนก",
    title: "Local Guide",
  },
  {
    quote:
      "บริการรวดเร็วทันใจ เรียกตอนดึกก็มาครับ ปั๊มน้ำเสีย น้ำไม่ไหล เดือดร้อนมาก ช่างมาเปลี่ยนอะไหล่ให้ใช้งานได้ทันที มีรับประกันงานซ่อมด้วย อุ่นใจเลยครับ",
    name: "นุกูล",
    title: "รีวิวบน Google Maps",
  },

];
