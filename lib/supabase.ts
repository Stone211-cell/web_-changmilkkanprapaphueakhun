import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// ใช้ service role key บน server-side (ถ้ามี) เพื่อข้าม RLS policies
const supabaseKey = (typeof window === "undefined" && process.env.SUPABASE_SERVICE_ROLE_KEY)
  ? process.env.SUPABASE_SERVICE_ROLE_KEY
  : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Bucket name สำหรับเก็บรูปภาพ
export const STORAGE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "picture";

/**
 * อัปโหลดไฟล์ไป Supabase Storage
 * @returns URL ของไฟล์ที่อัปโหลด
 */
export async function uploadImage(
  file: File,
  folder: string = "uploads"
): Promise<string> {
  const fileExt = file.name.split(".").pop();
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(fileName);

  return data.publicUrl;
}
