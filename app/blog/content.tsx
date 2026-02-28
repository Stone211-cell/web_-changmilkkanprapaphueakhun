"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import {
    Calendar, User, Tag, Share2, Facebook, Twitter, Link as LinkIcon,
    MessageCircle, Phone, ArrowLeft, CheckCircle2, AlertTriangle,
    Droplets, PenTool, Wrench, ShieldCheck
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShareButtons } from "@/components/Blog/shar";

gsap.registerPlugin(ScrollTrigger);

interface BlogLayoutProps {
    post: BlogPost;
    children: React.ReactNode;
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animations removed to prevent opacity-0 bugs where content goes missing
    }, { scope: containerRef });

    return (
        <article ref={containerRef} className="bg-[#f8fafc] min-h-screen pb-24 pt-32 selection:bg-blue-200">
            {/* Custom Background Decorators */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    กลับหน้ารวมบทความ
                </Link>

                {/* Header Section */}
                <header ref={headerRef} className="max-w-4xl mb-12">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full flex items-center gap-1.5">
                            <Tag className="w-3 h-3" />
                            {post.category}
                        </span>
                        <div className="flex items-center text-sm text-slate-500 gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>{post.date}</time>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl ring-4 ring-white shadow-md">
                            ช
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-900">{post.author}</p>
                            <p className="text-sm text-slate-500">ผู้เชี่ยวชาญด้านระบบประปา</p>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div ref={imageRef} className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-16 group">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        priority
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Main Content Area */}
                    <div className="w-full lg:w-2/3">
                        <div
                            ref={contentRef}
                            className="prose prose-lg md:prose-xl prose-slate max-w-none 
                                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-4
                                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                                prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:font-medium prose-blockquote:text-slate-700 prose-blockquote:not-italic
                                prose-ul:text-slate-600 prose-ul:list-disc prose-ul:pl-6
                                prose-li:my-2 prose-li:marker:text-blue-500
                                [&>p>strong]:text-slate-900 [&>p>strong]:font-bold"
                        >
                            {children}
                        </div>

                        {/* Article Tags & Share */}
                        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-slate-700">แท็กที่เกี่ยวข้อง:</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-md hover:bg-slate-200 transition-colors cursor-pointer">ซ่อมท่อประปา</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-md hover:bg-slate-200 transition-colors cursor-pointer">ปัญหาบ้าน</span>
                            </div>

                            <ShareButtons />
                        </div>

                        {/* Author Box */}
                        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-slate-100 flex-shrink-0 relative overflow-hidden ring-4 ring-slate-50">
                                <Image
                                    src="/images/service/LOGO.jpg"
                                    alt="Author"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">เขียนโดย {post.author}</h4>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    ผู้เชี่ยวชาญด้านระบบประปาที่มีประสบการณ์มากกว่า 10 ปี แก้ไขปัญหาน้ำรั่วซึม ท่อตัน และวางระบบประปาใหม่ให้กับบ้านนับพันหลัง พร้อมให้ความรู้ที่ถูกต้องแก่เจ้าของบ้าน
                                </p>
                                <Link href="/" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                                    อ่านเพิ่มเติมเกี่ยวกับเรา <ArrowLeft className="w-4 h-4 rotate-180" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/3">
                        <div ref={sidebarRef} className="sticky top-32 flex flex-col gap-8">

                            {/* Service Card */}
                            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>

                                <ShieldCheck className="w-12 h-12 text-blue-300 mb-6" />

                                <h3 className="text-2xl font-bold mb-4">บริการช่างประปนด่วน 24 ชม.</h3>
                                <p className="text-blue-100 mb-8 leading-relaxed">
                                    พบค่าน้ำพุ่ง ท่อรั่ว ท่อตัน หรือปั๊มน้ำมีปัญหา เรียกใช้ช่างมิล บริการไว แก้ไขตรงจุด พร้อมรับประกันงานซ่อม
                                </p>

                                <div className="space-y-4">
                                    <a href="tel:0644088510" className="flex items-center justify-center gap-3 w-full bg-white text-blue-900 font-bold py-4 px-6 rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20">
                                        <Phone className="w-5 h-5" />
                                        โทรศัพท์: 064-408-8510
                                    </a>
                                    <a href="https://line.me/ti/p/~0644088510" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-[#00B900] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#00a000] transition-colors shadow-lg shadow-[#00B900]/30">
                                        <MessageCircle className="w-5 h-5" />
                                        ติดต่อทาง LINE
                                    </a>
                                </div>
                            </div>

                            {/* Key Highlights */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <PenTool className="w-5 h-5 text-blue-600" />
                                    ทำไมต้องช่างมิล
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: "ช่างผู้ชำนาญการ", desc: "ประสบการณ์ยาวนาน แก้ไขได้ทุกปัญหา" },
                                        { title: "เครื่องมือทันสมัย", desc: "ตรวจหาจุดรั่วไหลโดยไม่ต้องทุบทำลาย" },
                                        { title: "ราคามาตรฐาน", desc: "ประเมินราคาก่อนซ่อม ไม่มีบวกเพิ่ม" },
                                        { title: "รับประกันผลงาน", desc: "อุ่นใจด้วยการรับประกันหลังการซ่อมแซม" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 text-sm">{item.title}</h4>
                                                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Related Posts Widget */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                                    บทความที่คุณอาจสนใจ
                                </h3>
                                <div className="space-y-5">
                                    <Link href="/blog/blog1" className="group flex gap-4 items-center">
                                        <div className="w-20 h-20 rounded-xl overflow-hidden relative flex-shrink-0">
                                            <Image src="/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg" alt="ท่อน้ำรั่ว" fill className="object-cover group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">ท่อน้ำรั่วใต้พื้นดิน! สัญญาณเงียบที่ทำร้ายบ้านคุณ</h4>
                                            <p className="text-xs text-slate-400 mt-2">22 กุมภาพันธ์ 2569</p>
                                        </div>
                                    </Link>
                                    <Link href="/blog/blog2" className="group flex gap-4 items-center">
                                        <div className="w-20 h-20 rounded-xl overflow-hidden relative flex-shrink-0">
                                            <Image src="/images/service/LINE_ติดตั้งปั้มน้ำ.webp" alt="ปั๊มน้ำดัง" fill className="object-cover group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">ปั๊มน้ำดังตลอดเวลา? รวมวิธีแก้ปัญหาปั๊มน้ำตัดต่อบ่อย</h4>
                                            <p className="text-xs text-slate-400 mt-2">20 กุมภาพันธ์ 2569</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>

            {/* Bottom Fullwidth CTA */}
            <div ref={ctaRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="bg-blue-600 rounded-3xl overflow-hidden relative">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                    <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-2xl text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">มีปัญหาเรื่องระบบประปาใช่ไหม?</h2>
                            <p className="text-blue-100 text-lg md:text-xl">
                                ปล่อยไว้มีแต่จะบานปลาย ให้ช่างมิลผู้เชี่ยวชาญดูแลระบบน้ำในบ้านคุณ วันนี้ประเมินงานให้ฟรี! เบื้องต้นทาง Line
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
                            <a href="tel:0644088510" className="inline-flex justify-center items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-slate-50 hover:scale-105 transition-all text-lg">
                                โทรปรึกษาทันที
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
