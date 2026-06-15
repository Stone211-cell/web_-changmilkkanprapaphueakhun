"use client";

import { useRef } from "react";
import Image from "next/image";
import ContactedBox from "../Contacted/ContactedBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Bannerbg = ({ img, text, des }: { img: string; text?: string; des?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-[auto] min-h-[500px] md:h-[600px] rounded-[3rem] shadow-2xl my-12 mx-auto max-w-7xl group">
      <div className="absolute inset-0 w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000">
        <Image
          src={img}
          alt={`บริการ${text || 'ช่างประปา'} ช่างมิลการประปา`}
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-20 text-white py-12">
        <div className="max-w-2xl flex flex-col gap-6 text-left">
          <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-none">{text}</h2>
          {des && (
            <p className="text-lg md:text-2xl text-slate-200 font-medium leading-relaxed">
              {des}
            </p>
          )}
        </div>
        
        {/* ContactedBox moved out of max-w-2xl to prevent squishing */}
        <div className="mt-8 w-full max-w-4xl self-start">
          <ContactedBox pops="hidden" />
        </div>
      </div>
    </div>
  );
};

export default Bannerbg;
