"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

import { Bannerbg } from "@/components/Banner/BannerImg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    // Filter to only show the two blogs that we actually have pages for, 
    // or manually map them to /blog/blog1 and /blog/blog2
    const displayPosts = [
        { ...blogPosts[0], link: '/blog/blog1' },
        { ...blogPosts[1], link: '/blog/blog2' },
        { ...blogPosts[2], link: '/blog/blog3' },
        { ...blogPosts[3], link: '/blog/blog4' },
    ];

    useGSAP(() => {
        // Removed animation to ensure cards do not stay hidden if ScrollTrigger fails
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-slate-50 min-h-screen pb-24 selection:bg-blue-200">
            <Bannerbg
                img="/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg"
                text="บทความและความรู้"
                des="รวบรวมเทคนิค วิธีดูแลรักษาระบบประปา และสาระน่ารู้จากช่างประปามืออาชีพ"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            เจาะลึกทุกเรื่อง <span className="text-blue-600">งานประปา</span>
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                            อัปเดตสาระน่ารู้ล่าสุด โดยช่างผู้ชำนาญการ เพื่อให้บ้านของคุณปลอดภัยจากปัญหาน้ำรั่วซึม
                        </p>
                    </div>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {displayPosts.map((post, i) => (
                        <Link
                            href={post.link}
                            key={i}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-2"
                        >
                            <div className="relative w-full ">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-1.5 shadow-sm">
                                        <Tag className="w-3 h-3" />
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center text-xs text-slate-500 gap-1.5 mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <time>{post.date}</time>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 line-clamp-3 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="flex items-center font-bold text-blue-600 text-sm">
                                    อ่านบทความ <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State / Coming Soon */}
                <div className="mt-16 text-center py-12 bg-white rounded-3xl border border-slate-100 border-dashed">
                    <p className="text-slate-500 font-medium text-lg">บทความอื่นๆ กำลังทยอยอัปเดตเร็วๆ นี้</p>
                </div>
            </div>
        </div>
    );
}
