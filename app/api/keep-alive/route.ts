import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET — Keep-alive endpoint สำหรับ cron job ยิงมาทุก 3 วัน
// ป้องกัน Supabase free plan ถูก pause
export async function GET() {
  try {
    // Simple query เพื่อ wake up database
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json({
      status: "ok",
      message: "Database is alive! 🟢",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Keep-alive failed:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Database connection failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
