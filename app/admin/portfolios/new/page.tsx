"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Upload, Save, Loader2, X } from "lucide-react";
import Link from "next/link";

export default function NewPortfolioPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    categoryId: "",
    displayOrder: 1000,
  });
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCats() {
      try {
        const res = await axios.get("/api/categories?type=PORTFOLIO");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    }
    fetchCats();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "portfolios");

      const res = await axios.post("/api/upload", formData);
      setImage(res.data.url);
    } catch {
      setError("อัปโหลดรูปภาพไม่สำเร็จ");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    setError("");

    if (!form.title) {
      setError("กรุณากรอกชื่อผลงาน");
      return;
    }

    if (!image) {
      setError("กรุณาอัปโหลดรูปภาพ");
      return;
    }

    setSaving(true);
    try {
      await axios.post("/api/portfolios", {
        ...form,
        image,
      });
      router.push("/admin/portfolios");
    } catch {
      setError("บันทึกผลงานไม่สำเร็จ");
    } finally {
      setSaving(false);
    }
  };



  return (
    <div className="max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/portfolios"
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            เพิ่มผลงานใหม่
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            เพิ่มประวัติการทำงานเป็นการ์ดแสดงในหน้าผลงาน
          </p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium">
          {error}
        </div>
      )}

      {/* Form */}
      <div className="space-y-6">
        {/* Image Upload */}
        <div className="bg-slate-900 rounded-2xl border border-white/5 p-6">
          <label className="block text-sm font-bold text-slate-300 mb-3">
            รูปภาพผลงาน *
          </label>
          {image ? (
            <div className="relative group rounded-xl overflow-hidden">
              <img
                src={image}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setImage("");
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="absolute top-2 right-2 bg-black/60 hover:bg-red-500 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
                title="ลบรูปภาพ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="w-full h-64 border-2 border-dashed border-white/10 rounded-xl hover:border-emerald-500/30 transition-all flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-emerald-400"
            >
              {uploading ? (
                <Loader2 className="w-8 h-8 animate-spin" />
              ) : (
                <>
                  <Upload className="w-8 h-8" />
                  <span className="text-sm font-medium">
                    คลิกเพื่ออัปโหลดรูปภาพผลงาน
                  </span>
                  <span className="text-xs text-slate-600">
                    JPEG, PNG, WebP (สูงสุด 5MB)
                  </span>
                </>
              )}
            </button>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Title & Category */}
        <div className="bg-slate-900 rounded-2xl border border-white/5 p-6 space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              ชื่อผลงาน *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="เช่น: ซ่อมท่อน้ำรั่ว คอนโด เดอะ พาร์คแลนด์"
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              หมวดหมู่
            </label>
            <select
              value={form.categoryId}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, categoryId: e.target.value }))
              }
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            >
              <option value="">เลือกหมวดหมู่</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              ลำดับการแสดง
            </label>
            <input
              type="number"
              value={form.displayOrder}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  displayOrder: parseInt(e.target.value) ?? 1000,
                }))
              }
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
            <p className="text-xs text-slate-500 mt-1">
              ตัวเลขน้อย = แสดงก่อน (เช่น 1, 2, 3...) ค่าเริ่มต้นคือ 1000 (แสดงหลังสุด)
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-slate-900 rounded-2xl border border-white/5 p-6">
          <label className="block text-sm font-bold text-slate-300 mb-2">
            รายละเอียดเพิ่มเติม
          </label>
          <textarea
            value={form.description}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, description: e.target.value }))
            }
            rows={4}
            placeholder="อธิบายรายละเอียดงานที่ทำ... (ไม่บังคับ)"
            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          บันทึกผลงาน
        </button>
      </div>
    </div>
  );
}
