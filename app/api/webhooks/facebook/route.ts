import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ข้อมูลที่เราจะให้ Make.com ยิงมา
    // {
    //   "title": "หัวข้อโพสต์ หรือ ข้อความสั้นๆ",
    //   "description": "เนื้อหาโพสต์เต็มๆ",
    //   "image": "URL รูปภาพจาก Facebook (ถ้ามี)",
    //   "videoUrl": "URL วิดีโอจาก Facebook (ถ้ามี)",
    //   "mediaType": "image" หรือ "video",
    //   "categoryName": "ชื่อหมวดหมู่ (ออปชันเสริม)"
    // }

    const { title, description, image, videoUrl, mediaType, categoryName } = body;

    // ตรวจสอบข้อมูลเบื้องต้น
    if (!title) {
      return NextResponse.json({ error: 'Missing title' }, { status: 400 });
    }

    // จัดการหมวดหมู่ (ถ้ามีส่งมา)
    let categoryId = null;
    if (categoryName) {
      let category = await prisma.category.findFirst({
        where: { name: categoryName, type: 'PORTFOLIO' }
      });
      
      if (!category) {
        category = await prisma.category.create({
          data: { name: categoryName, type: 'PORTFOLIO' }
        });
      }
      categoryId = category.id;
    }

    // สร้างผลงานใหม่
    const portfolio = await prisma.portfolio.create({
      data: {
        title: title.substring(0, 100), // จำกัดความยาวหัวข้อ
        description: description || null,
        image: image || '/images/service/placeholder.jpg', // ถ้าไม่มีรูปให้ใช้รูปพื้นฐาน
        videoUrl: videoUrl || null,
        mediaType: mediaType || (videoUrl ? 'video' : 'image'),
        categoryId: categoryId,
        featured: false,
        displayOrder: 1000
      }
    });

    return NextResponse.json({ success: true, data: portfolio });

  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
