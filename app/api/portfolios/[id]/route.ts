import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkIsAdmin } from "@/lib/admin";

// PUT — อัปเดตผลงาน (เฉพาะแอดมิน)
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

    const portfolio = await prisma.portfolio.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(portfolio);
  } catch (error) {
    console.error("Error updating portfolio:", error);
    return NextResponse.json(
      { error: "Failed to update portfolio" },
      { status: 500 }
    );
  }
}

// DELETE — ลบผลงาน (เฉพาะแอดมิน)
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

    await prisma.portfolio.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Portfolio deleted" });
  } catch (error) {
    console.error("Error deleting portfolio:", error);
    return NextResponse.json(
      { error: "Failed to delete portfolio" },
      { status: 500 }
    );
  }
}
