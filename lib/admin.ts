import { auth, createClerkClient } from "@clerk/nextjs/server";

// ฟังก์ชันตรวจเช็ค Admin (เอาไว้ใช้ใน API)
export async function checkIsAdmin(): Promise<boolean> {
  try {
    const authObj = await auth();
    
    // ถ้าไม่มี userId แปลว่ายังไม่ได้ล็อกอิน
    if (!authObj.userId) {
      return false;
    }

    // ดึงข้อมูลผู้ใช้
    const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });
    const user = await clerk.users.getUser(authObj.userId);
    const privateData = user.privateMetadata || {};
    
    // เช็คค่าว่าเป็น Admin ไหม
    if (privateData.isAdmin === true || privateData.IsAdmin === true || privateData.IsAdmis === true) {
      return true; // เป็น Admin
    }

    return false; // ไม่เป็น Admin

  } catch (error) {
    console.error("เช็คแอดมินล้มเหลว:", error);
    return false;
  }
}
