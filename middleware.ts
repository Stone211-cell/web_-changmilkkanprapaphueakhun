import { clerkMiddleware, createRouteMatcher, createClerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 1. หน้าไหนบ้างที่ต้องเป็น Admin ถึงจะเข้าได้
const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
]);

// 2. หน้าไหนบ้างที่ให้คนทั่วไปเข้าได้เลย
const isPublicRoute = createRouteMatcher([
  "/admin/sign-in(.*)",
  "/admin/sign-up(.*)",
  "/api(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // ถ้าเป็นหน้าทั่วไป (Public) ให้ปล่อยผ่านเลย ไม่ต้องทำอะไร
  if (isPublicRoute(req)) return;

  // ถ้าเป็นหน้า Admin (Protected) ให้เริ่มตรวจสอบ
  if (isProtectedRoute(req)) {
    const authObj = await auth();
    
    // เช็คว่าล็อกอินหรือยัง? ถ้ายัง ให้เด้งไปหน้าล็อกอิน
    if (!authObj.userId) {
      return authObj.redirectToSignIn({ returnBackUrl: req.url });
    }

    try {
      // ดึงข้อมูลผู้ใช้จาก Clerk แบบตรงไปตรงมา
      const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });
      const user = await clerk.users.getUser(authObj.userId);
      const privateData = user.privateMetadata || {};
      
      // เช็คว่าเป็น Admin หรือไม่ ด้วย if-else แบบเข้าใจง่ายๆ
      let isAdmin = false;
      if (privateData.isAdmin === true || privateData.IsAdmin === true || privateData.IsAdmis === true) {
        isAdmin = true;
      }

      // ถ้าตรวจสอบแล้ว "ไม่ใช่" แอดมิน ให้ดีดกลับหน้าแรก
      if (isAdmin === false) {
        return NextResponse.redirect(new URL("/", req.url));
      }

    } catch (error) {
      console.error("เช็คแอดมินล้มเหลว:", error);
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
