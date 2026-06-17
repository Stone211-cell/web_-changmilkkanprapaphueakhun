"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import PerformanceContainer from "./PerformanceContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPortfolios } from "@/services/api";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItem {
  id: string;
  title: string;
  description: string | null;
  image: string;
}

const PerformanceShow = ({
  mainmsg,
  pops,
}: {
  mainmsg?: string;
  pops?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  // ดึงข้อมูลจาก API แบบแยกไฟล์ให้อ่านง่าย
  useEffect(() => {
    async function fetchPortfolios() {
      try {
        const data = await getPortfolios();
        // กรองเอาเฉพาะอันที่ติ๊ก "แสดงหน้าหลัก" (featured === true)
        const featuredData = data.filter((item: any) => item.featured === true);
        // แสดงแค่ 6 รายการบนหน้าหลัก
        setPortfolios(featuredData.slice(0, 6));
      } catch {
        // fallback ถ้า database ยังไม่พร้อม — ใช้ข้อมูลเดิม
        const LINKIMG = "/images/performance";
        setPortfolios([
          { id: "1", title: "เปลี่ยนท่อ ติดตั้งซิงค์ล้างหน้า", description: null, image: LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_1.jpg" },
          { id: "2", title: "เดินท่อใหม่ เปลี่ยนระบบจากใต้ดินย้ายมาบนดิน", description: null, image: LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_2.jpg" },
          { id: "3", title: "รับช่อมปั้มน้ำดังปั้มน้ำทำงานตลอดเวลา", description: null, image: LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg" },
          { id: "4", title: "รับติดตั้งปั้มน้ำตามที่ลูกค้าต้องการ", description: null, image: LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_4.jpg" },
          { id: "5", title: "รับช่อมน้ำหยดน้ำรั่วน้ำชึม และติดตั้งสุขภัณฑ์ไหม่", description: null, image: LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_5.jpg" },
          { id: "6", title: "รับเดินระบบท่อประปาไหม่ครบวงจร", description: null, image: LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_6.jpg" },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchPortfolios();
  }, []);

  useGSAP(() => {
    if (loading) return;

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
  }, { scope: containerRef, dependencies: [loading] });

  return (
    <div className="py-10 sm:py-12 md:py-16 lg:py-24 bg-slate-50/50 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div ref={titleRef} className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4">
          <div className="inline-block mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-100/50 text-blue-800 text-xs sm:text-sm font-medium">
            Project Gallery
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4 sm:mb-6 md:mb-8">
            ติดตามผลงานของเราได้ใน Facebook
          </h2>
          {mainmsg && (
            <Button
              className={`rounded-full px-8 py-5 text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-blue-800 hover:bg-blue-700 text-white min-w-[200px] font-medium ${pops || ''}`}
              asChild
            >
              <Link href="/performance">{mainmsg}</Link>
            </Button>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div
            ref={containerRef}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-4 sm:mt-6 px-3 sm:px-4 md:px-8 lg:px-12"
          >
            {portfolios.map((item) => (
              <div
                key={item.id}
                className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white"
              >
                <PerformanceContainer
                  image={item.image}
                  name={item.title}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default PerformanceShow;
