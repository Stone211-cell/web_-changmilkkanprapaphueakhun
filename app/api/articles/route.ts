import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkIsAdmin } from "@/lib/admin";

// GET — ดึงบทความทั้งหมด
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all"); // ถ้าส่ง ?all=true จะดึงทั้ง draft และ published

    const articles = await prisma.article.findMany({
      where: all === "true" ? {} : { published: true },
      include: {
        category: true, // ดึงข้อมูลหมวดหมู่มาด้วย
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}

// POST — สร้างบทความใหม่ (เฉพาะแอดมิน)
export async function POST(req: NextRequest) {
  try {
    const isAdmin = await checkIsAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
    }

    const body = await req.json();
    const { title, excerpt, content, image, categoryId, slug, published } = body;

    if (!title || !excerpt || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields: title, excerpt, content, slug" },
        { status: 400 }
      );
    }

    const article = await prisma.article.create({
      data: {
        title,
        excerpt,
        content,
        image: image || "",
        categoryId: categoryId || null,
        slug,
        published: published ?? false,
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating article:", error);
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as { code: string }).code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
  }
}
