"use client";

import { useRef } from "react";
import CardContainer from "./CardContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardBox = () => {
  const LINKIMG = "/images/service";
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(gridRef.current?.children ? Array.from(gridRef.current.children) : [], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-12 px-4 w-full">
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-center max-w-6xl mx-auto"
      >
        <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[1.5rem]">
          <CardContainer
            srcimg={LINKIMG + "/LINE_ติดตั้งปั้มน้ำ.webp"}
            alt="รับติดตั้งปั้มน้ำ"
            title="รับติดตั้งปั้มน้ำ"
          />
        </div>
        <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[1.5rem]">
          <CardContainer
            srcimg={LINKIMG + "/ติดตั้งชักโชรกไหม่.webp"}
            alt="รับติดตั้งสุขภัณฑ์"
            title="รับติดตั้งสุขภัณฑ์"
          />
        </div>
        <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[1.5rem]">
          <CardContainer
            srcimg={LINKIMG + "/LINE_เปลื่ยนท่อน้ำทิ้ง4นิ้ว_ลาดพร้าว.webp"}
            alt="รับเดินท่อ PPR PB"
            title="รับเดินท่อ PPR PB"
          />
        </div>
        <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[1.5rem]">
          <CardContainer
            srcimg={LINKIMG + "/รับซ่อมรั่วซึม.webp"}
            alt="รับซ่อมรั่วซึม"
            title="รับซ่อมรั่วซึม"
          />
        </div>
        <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[1.5rem]">
          <CardContainer
            srcimg={LINKIMG + "/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg"}
            alt="จบทุกงาน ไว้ใจเรา"
            title="จบทุกงาน ไว้ใจเรา"
          />
        </div>
        <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-[1.5rem]">
          <CardContainer
            srcimg={LINKIMG + "/LINE_ติดตั้งแทงค์น้ำ.webp"}
            alt="รับติดตั้งแทงค์น้ำ"
            title="รับติดตั้งแทงค์น้ำ"
          />
        </div>
      </div>
    </div>
  );
};
export default CardBox;
