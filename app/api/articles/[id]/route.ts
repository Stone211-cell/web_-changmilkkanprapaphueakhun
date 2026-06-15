import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkIsAdmin } from "@/lib/admin";

// GET — ดึงบทความตาม id หรือ slug
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // ลองหาด้วย id ก่อน, ถ้าไม่เจอลองหาด้วย slug
    const article = await prisma.article.findFirst({
      where: {
        OR: [{ id }, { slug: id }],
      },
      include: {
        category: true, // ดึงข้อมูลหมวดหมู่มาด้วย
      },
    });

    if (!article) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json(
      { error: "Failed to fetch article" },
      { status: 500 }
    );
  }
}

// PUT — อัปเดตบทความ (เฉพาะแอดมิน)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAdmin = await checkIsAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
    }

    const { id } = await params;
    const body = await req.json();

    // กรองเอาเฉพาะฟิลด์ที่ต้องการอัปเดต หรือส่ง body ตรงๆ ได้ แต่ยกเว้น category (เพราะเป็น relation object)
    const { category, ...updateData } = body;

    const article = await prisma.article.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(article);
  } catch (error) {
    console.error("Error updating article:", error);
    return NextResponse.json(
      { error: "Failed to update article" },
      { status: 500 }
    );
  }
}

// DELETE — ลบบทความ (เฉพาะแอดมิน)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAdmin = await checkIsAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
    }

    const { id } = await params;

    await prisma.article.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Article deleted" });
  } catch (error) {
    console.error("Error deleting article:", error);
    return NextResponse.json(
      { error: "Failed to delete article" },
      { status: 500 }
    );
  }
}
