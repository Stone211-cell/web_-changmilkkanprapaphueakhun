import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    let body: any = {};
    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      // Fallback
      body = await request.json().catch(() => ({}));
    }

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

    // ดึง URL รูปภาพให้ชัวร์ (บางที Make.com ส่งมาเป็น Tag HTML)
    let finalImage = image;
    if (!finalImage || finalImage.includes('<img')) {
      const match = (finalImage || description || '').match(/src="([^"]+)"/);
      if (match) {
        finalImage = match[1];
      }
    }
    
    // ถ้าไม่มีรูปจริงๆ ให้ใช้รูปสำรองที่มีอยู่จริง
    if (!finalImage || (!finalImage.startsWith('http') && !finalImage.startsWith('/'))) {
      finalImage = '/images/performance/LINE_ALBUM_รูปตอนทำงาน_250618_1.jpg';
    }

    // สร้างผลงานใหม่
    const portfolio = await prisma.portfolio.create({
      data: {
        title: title.substring(0, 100), // จำกัดความยาวหัวข้อ
        description: description || null,
        image: finalImage,
        videoUrl: videoUrl || null,
        mediaType: mediaType || (videoUrl ? 'video' : 'image'),
        categoryId: categoryId,
        featured: true, // ตั้งเป็น true ให้โชว์หน้าแรกด้วย
        displayOrder: 1000
      }
    });

    // สั่งล้างแคชเพื่อให้เว็บอัปเดตหน้าใหม่ทันที
    const { revalidatePath } = require('next/cache');
    revalidatePath('/');
    revalidatePath('/performance');

    return NextResponse.json({ success: true, data: portfolio });

  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
