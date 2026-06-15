import React from "react";
import { prisma } from "@/lib/prisma";
import Bannerbg from "@/components/Banner/Bannerbg";
import BlogFilterable from "@/components/Blog/BlogFilterable";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  // ดึงหมวดหมู่บทความ
  const categories = await prisma.category.findMany({
    where: { type: "ARTICLE" },
    select: { id: true, name: true },
    orderBy: { createdAt: "asc" },
  });

  // ดึงบทความที่เผยแพร่แล้วจาก database
  const dbArticles = await prisma.article.findMany({
    where: { published: true },
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  const articleItems = dbArticles.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    image: p.image,
    createdAt: p.createdAt,
    categoryId: p.categoryId,
    categoryName: p.category?.name,
  }));

  return (
    <div className="bg-slate-50 min-h-screen pb-24 selection:bg-blue-200">
      <Bannerbg
        img="/images/service/LINE_ALBUM_รูปตอนทำงาน_250618_3.jpg"
        text="บทความและความรู้"
        des="รวบรวมเทคนิค วิธีดูแลรักษาระบบประปา และสาระน่ารู้จากช่างประปามืออาชีพ"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              เจาะลึกทุกเรื่อง{" "}
              <span className="text-blue-600">งานประปา</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              อัปเดตสาระน่ารู้ล่าสุด โดยช่างผู้ชำนาญการ
              เพื่อให้บ้านของคุณปลอดภัยจากปัญหาน้ำรั่วซึม
            </p>
          </div>
        </div>

        {articleItems.length > 0 ? (
          <BlogFilterable items={articleItems} categories={categories} />
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 border-dashed">
            <p className="text-slate-500 font-medium text-lg">
              บทความกำลังทยอยอัปเดตเร็วๆ นี้
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
