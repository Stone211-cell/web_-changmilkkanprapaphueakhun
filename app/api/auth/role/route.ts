import { NextResponse } from "next/server";
import { checkIsAdmin } from "@/lib/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const isAdmin = await checkIsAdmin();
    return NextResponse.json({ isAdmin });
  } catch (error) {
    console.error("Role check error:", error);
    return NextResponse.json({ isAdmin: false });
  }
}
