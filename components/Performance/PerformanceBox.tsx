import Link from "next/link";
import { Button } from "../ui/button";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import PerformanceFilterable from "./PerformanceFilterable";

const PerformanceBox = async ({
  mainmsg,
  pops,
}: {
  mainmsg?: string;
  pops?: string;
}) => {
  const LINKIMG = "/images/performance";

  let portfolioItems: {
    id: string;
    image: string;
    name: string;
    categoryId?: string | null;
    categoryName?: string | null;
    videoUrl?: string | null;
    mediaType?: string;
  }[] = [];

  let categories: { id: string; name: string }[] = [];

  try {
    // ดึงหมวดหมู่ผลงาน
    categories = await prisma.category.findMany({
      where: { type: "PORTFOLIO" },
      select: { id: true, name: true },
      orderBy: { createdAt: "asc" },
    });

    const dbPortfolios = await prisma.portfolio.findMany({
      include: { category: true },
      orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
    });

    if (dbPortfolios.length > 0) {
      portfolioItems = dbPortfolios.map((p) => ({
        id: p.id,
        image: p.image,
        name: p.title,
        categoryId: p.categoryId,
        categoryName: p.category?.name,
        videoUrl: p.videoUrl,
        mediaType: p.mediaType,
      }));
    } else {
      throw new Error("No portfolios in DB, fallback to filesystem");
    }
  } catch {
    // Fallback: อ่านจาก filesystem เหมือนเดิม
    try {
      const fsPromises = require("fs").promises;
      const dir = path.join(process.cwd(), "public/images/performance");
      
      const files = await fsPromises.readdir(dir);
      const imageFiles = files.filter((file: string) => /\.(jpe?g|png|webp)$/i.test(file));
      
      const statsPromises = imageFiles.map(async (file: string) => {
        const filePath = path.join(dir, file);
        const stats = await fsPromises.stat(filePath);
        return { file, mtime: stats.mtime };
      });

      const allImagesWithTime = (await Promise.all(statsPromises))
        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

      portfolioItems = allImagesWithTime.map(({ file }, index) => ({
        id: `fallback-${index}`,
        image: `${LINKIMG}/${file}`,
        name: "ซ่อมด่วน 24 ชั่วโมง ติดต่อช่างมิล",
        categoryId: null,
        categoryName: null,
        videoUrl: null,
        mediaType: "image",
      }));
    } catch {
      portfolioItems = [];
    }
  }

  return (
    <div>
      <section>
        <div className="flex flex-col items-center mb-8 px-4">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-100/50 text-blue-800 text-sm font-medium">
            All Projects
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-6">
            ผลงานทั้งหมดของเรา
          </h3>
          <Button
            className={`rounded-full px-8 py-5 text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-blue-800 hover:bg-blue-700 text-white min-w-[200px] font-medium ${pops || ""}`}
            asChild
          >
            <Link href="/performance">{mainmsg}</Link>
          </Button>
        </div>
        
        {/* ใช้ Component ฝั่ง Client สำหรับการค้นหาและกรอง */}
        <PerformanceFilterable 
          items={portfolioItems} 
          categories={categories} 
        />
        
      </section>
    </div>
  );
};
export default PerformanceBox;
