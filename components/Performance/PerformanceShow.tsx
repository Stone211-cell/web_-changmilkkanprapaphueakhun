"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import PerformanceContainer from "./PerformanceContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PerformanceBox = ({
  mainmsg,
  pops,
}: {
  mainmsg?: string;
  pops?: string;
}) => {
  const LINKIMG = "/images/performance";
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    gsap.from(containerRef.current?.children ? Array.from(containerRef.current.children) : [], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <div className="py-16 md:py-24 bg-slate-50/50 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div ref={titleRef} className="flex flex-col items-center mb-12 px-4">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-100/50 text-blue-800 text-sm font-medium">
            Project Gallery
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-8">
            ผลงานของเรา
          </h3>
          {mainmsg && (
            <Button
              className={`rounded-full px-8 py-5 text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-blue-800 hover:bg-blue-700 text-white min-w-[200px] font-medium ${pops || ''}`}
              asChild
            >
              <Link href="/performance">{mainmsg}</Link>
            </Button>
          )}
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 px-4 md:px-8 lg:px-12"
        >
          <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
            <PerformanceContainer
              image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_1.jpg"}
              name="เปลี่ยนท่อ ติดตั้งซิงค์ล้างหน้า"
            />
          </div>

          <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
            <PerformanceContainer
              image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_2.jpg"}
              name="เดินท่อใหม่ เปลี่ยนระบบจากใต้ดินย้ายมาบนดิน"
            />
          </div>

          <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
            <PerformanceContainer
              image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg"}
              name="รับช่อมปั้มน้ำดังปั้มน้ำทำงานตลอดเวลา"
            />
          </div>

          <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
            <PerformanceContainer
              image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_4.jpg"}
              name="รับติดตั้งปั้มน้ำตามที่ลูกค้าต้องการ"
            />
          </div>

          <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
            <PerformanceContainer
              image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_5.jpg"}
              name="รับช่อมน้ำหยดน้ำรั่วน้ำชึม และติดตั้งสุขภัณฑ์ไหม่"
            />
          </div>

          <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
            <PerformanceContainer
              image={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_6.jpg"}
              name="รับเดินระบบท่อประปาไหม่ครบวงจร"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PerformanceBox;
