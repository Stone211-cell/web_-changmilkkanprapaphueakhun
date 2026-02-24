"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DetailsProductBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(textRef.current?.children ? Array.from(textRef.current.children) : [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-16 md:py-24 px-4 w-full">
      <div
        ref={textRef}
        className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden"
      >
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-400 via-primary to-blue-600"></div>

        <div className="inline-block">
          <Button
            className="bg-blue-800 text-white rounded-full px-8 py-6 text-lg tracking-wide shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-900/30"
            asChild
          >
            <Link href="#service">ช่างมิล ประปาเพื่อคุณ</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight px-4">
            รับซ่อมประปา หาจุดรั่ว <br className="hidden md:block" />
            <span className="text-blue-600">ครบจบในที่เดียว</span>
          </h3>

          <div className="w-16 h-1 bg-blue-200 mx-auto rounded-full"></div>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            บริการรับซ่อมประปา หาจุดรั่ว เดินท่อประปา รับติดตั้งที่เก็บน้ำ และ รับติดตั้งระบบประปา รับซ่อมท่อทุกประเภท ครบจบในที่เดียว
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "ปั๊มน้ำทำงานเอง", "มิเตอร์น้ำหมุนผิดปกติ", "ค่าน้ำสูง",
              "ท่อรั่วใต้พื้นปูน", "เดินท่อประปาใหม่", "ติดตั้งปั๊มน้ำ",
              "ติดตั้งแท็งก์น้ำ", "เปลี่ยนสุขภัณฑ์", "ซ่อมท่อรั่ว",
              "งานประปาครบวงจร"
            ].map((tag) => (
              <span key={tag} className="px-5 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-bold border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsProductBox;
