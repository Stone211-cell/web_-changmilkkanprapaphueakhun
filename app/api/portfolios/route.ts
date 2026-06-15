import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkIsAdmin } from "@/lib/admin";

// GET — ดึงผลงานทั้งหมด
export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      include: {
        category: true, // ดึงข้อมูลหมวดหมู่มาด้วย
      },
      orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
    });

    return NextResponse.json(portfolios);
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolios" },
      { status: 500 }
    );
  }
}

// POST — สร้างผลงานใหม่ (เฉพาะแอดมิน)
export async function POST(req: NextRequest) {
  try {
    const isAdmin = await checkIsAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
    }

    const body = await req.json();
    const { title, description, image, categoryId, featured, displayOrder } =
      body;

    if (!title || !image) {
      return NextResponse.json(
        { error: "Missing required fields: title, image" },
        { status: 400 }
      );
    }

    const portfolio = await prisma.portfolio.create({
      data: {
        title,
        description: description || null,
        image,
        categoryId: categoryId || null,
        featured: featured ?? false,
        displayOrder: displayOrder ?? 0,
      },
    });

    return NextResponse.json(portfolio, { status: 201 });
  } catch (error) {
    console.error("Error creating portfolio:", error);
    return NextResponse.json(
      { error: "Failed to create portfolio" },
      { status: 500 }
    );
  }
}
