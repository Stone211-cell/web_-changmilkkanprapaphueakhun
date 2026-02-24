"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Bannerbg } from "@/components/Banner/BannerImg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (cardsRef.current) {
            gsap.from(Array.from(cardsRef.current.children), {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 85%",
                }
            });
        }
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-slate-50 min-h-screen pb-20">
            <Bannerbg
                img="/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg"
                text="บทความและความรู้"
                des="รวบรวมเทคนิค วิธีดูแลรักษาระบบประปา และสาระน่ารู้จากช่างประปามืออาชีพ"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            เจาะลึกทุกเรื่อง <span className="text-blue-600">งานประปา</span>
                        </h2>
                        <p className="text-slate-600 text-lg">
                            ออเดตสาระน่ารู้ล่าสุด โดยช่างผู้ชำนาญการ เพื่อให้บ้านของคุณปลอดภัยจากปัญหาน้ำรั่วซึม
                        </p>
                    </div>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}
