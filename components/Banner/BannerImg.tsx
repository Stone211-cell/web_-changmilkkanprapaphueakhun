"use client";

import { useRef } from "react";
import Image from "next/image";
import ContactedBox from "../Contacted/ContactedBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const BannerImg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(imageRef.current, {
      scale: 1.1,
      duration: 1.5,
      ease: "power3.out",
    }).from(
      textRef.current?.children ? Array.from(textRef.current.children) : [],
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=1"
    );

    gsap.to(imageRef.current, {
      y: "15%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-[480px] sm:h-[550px] md:h-[700px] lg:h-[800px] rounded-b-[1.5rem] sm:rounded-b-[2.5rem] md:rounded-b-[5rem] shadow-2xl bg-slate-950">
      {/* Background with Parallax */}
      <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <div className="absolute inset-0">
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/banner/แบนเนอร์_ช่างประปา.png"
              alt="ช่างมิลการประปา รับซ่อมประปา หาจุดรั่ว กทม. และปริมณฑล"
              className="w-full h-full object-cover"
              fill
              priority
            />
          </div>
          <div className="md:hidden absolute inset-0">
            <Image
              src="/images/banner/มือถือ_แบนเนอร์_ช่างประปา.png"
              alt="ช่างมิลการประปา บริการซ่อมท่อประปารั่ว 24 ชั่วโมง"
              className="w-full h-full object-cover"
              fill
              priority
            />
          </div>
        </div>
        {/* Extremely dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/60 to-slate-950/95"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center text-white pt-14 sm:pt-16 md:pt-20">
        <div ref={textRef} className="max-w-6xl flex flex-col items-center gap-4 sm:gap-6 md:gap-10">
          <div className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-3xl text-[8px] sm:text-[9px] md:text-xs font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            Professional Plumbing Engineering
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[7rem] font-black tracking-tighter leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-4 sm:px-0">
            <span className="text-sm sm:text-lg md:text-2xl lg:text-4xl block mb-1 sm:mb-2 text-blue-400">รับซ่อมประปา หาจุดรั่ว</span>
            ช่างมิล <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-white italic">ประปาเพื่อคุณ</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-300 max-w-4xl font-bold leading-relaxed opacity-90 px-4 sm:px-0">
            รับซ่อมประปา หาจุดรั่ว เดินท่อ ติดตั้งปั๊มน้ำ ครบวงจร
            <span className="hidden lg:inline"> มั่นใจในคุณภาพด้วยทีมช่างมืออาชีพพร้อมดูแลคุณตลอด 24 ชั่วโมง</span>
          </p>
          <div className="mt-2 sm:mt-4 md:mt-8 w-full max-w-5xl">
            <ContactedBox pops="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImg;
