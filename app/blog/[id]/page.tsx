import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { Bannerbg } from "@/components/Banner/BannerImg";

// Articles imports
import { UndergroundLeak } from "@/components/Blog/Articles/UndergroundLeak";
import { WaterPumpSolutions } from "@/components/Blog/Articles/WaterPumpSolutions";
import { PlumbingGuide } from "@/components/Blog/Articles/PlumbingGuide";
import { ChangmilkQuality } from "@/components/Blog/Articles/ChangmilkQuality";
import { SewerCleaning } from "@/components/Blog/Articles/SewerCleaning";

const getArticleComponent = (id: string) => {
    switch (id) {
        case "detecting-underground-pipe-leak":
            return <UndergroundLeak />;
        case "water-pump-problems-and-solutions":
            return <WaterPumpSolutions />;
        case "complete-house-plumbing-guide":
            return <PlumbingGuide />;
        case "why-choose-changmilk-plumbing":
            return <ChangmilkQuality />;
        case "sewer-and-pipe-cleaning-guide":
            return <SewerCleaning />;
        default:
            return null;
    }
};

export default function BlogPost({ params }: { params: { id: string } }) {
    const post = blogPosts.find((p) => p.id === params.id);

    if (!post) {
        notFound();
    }

    const ArticleContent = getArticleComponent(post.id);

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <Bannerbg
                img={post.image}
                text={post.category}
                des={post.title}
            />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-12 overflow-hidden">
                    <header className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-3 text-slate-500 font-medium mb-6">
                            <span className="bg-slate-100 px-3 py-1 rounded-full text-blue-600 text-sm">
                                {post.category}
                            </span>
                            <span>•</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>โดย {post.author}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            {post.excerpt}
                        </p>
                    </header>

                    <div className="relative h-[400px] md:h-[500px] w-full mb-12 rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
                        {ArticleContent ? (
                            ArticleContent
                        ) : (
                            <p>เนื้อหาบทความกำลังอยู่ระหว่างการปรับปรุง...</p>
                        )}
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            กลับไปหน้าบทความ
                        </Link>

                        <Link
                            href="/service"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
                        >
                            ดูบริการช่างประปา
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
