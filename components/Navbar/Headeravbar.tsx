"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ContactIcon } from "../Contacted/ContactIcon";
import Dropdown from "./Dropdown";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { List } from "@/utils/menulist";

const Headeravbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: navRef });

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/90 backdrop-blur-xl transition-all duration-500 shadow-2xl"
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <span className="text-xl md:text-2xl font-black text-white italic">มิล</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-black tracking-tighter text-white leading-none group-hover:text-blue-400 transition-colors">ช่างมิล</span>
            <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest leading-none">Engineering</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {List.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white transition-all relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-3 md:gap-6">
          <a href="tel:0644088510" className="hidden xl:flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 font-black uppercase leading-none mb-1">Hotline</span>
              <span className="text-xs font-black text-white leading-none">064-408-8510</span>
            </div>
          </a>

          <Link
            href="tel:0644088510"
            className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white px-5 md:px-7 py-2 md:py-3 rounded-full text-xs font-black transition-all shadow-lg shadow-blue-900/40 hover:scale-105 active:scale-95"
          >
            ปรึกษาช่าง
          </Link>

          <div className="pl-4 border-l border-white/10">
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Headeravbar;
