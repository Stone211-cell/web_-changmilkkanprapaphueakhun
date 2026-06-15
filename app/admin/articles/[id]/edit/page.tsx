"use client";

import { useEffect, useState, useRef, use } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Upload, Save, Eye, Loader2 } from "lucide-react";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  categoryId: string | null;
  slug: string;
  image: string;
  published: boolean;
}

export default function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    categoryId: "",
    slug: "",
    published: false,
  });
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const [articleRes, catsRes] = await Promise.all([
          axios.get(`/api/articles/${id}`),
          axios.get("/api/categories?type=ARTICLE"),
        ]);
        const article: Article = articleRes.data;
        setCategories(catsRes.data);
        setForm({
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          categoryId: article.categoryId || "",
          slug: article.slug,
          published: article.published,
        });
        setImage(article.image);
      } catch {
        setError("ไม่สามารถโหลดข้อมูลได้");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "articles");

      const res = await axios.post("/api/upload", formData);
      setImage(res.data.url);
    } catch {
      setError("อัปโหลดรูปภาพไม่สำเร็จ");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (publish?: boolean) => {
    setError("");

    if (!form.title || !form.excerpt || !form.content || !form.slug) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    setSaving(true);
    try {
      await axios.put(`/api/articles/${id}`, {
        ...form,
        image,
        published: publish !== undefined ? publish : form.published,
      });
      router.push("/admin/articles");
    } catch {
      setError("บันทึกบทความไม่สำเร็จ");
    } finally {
      setSaving(false);
    }
  };



  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/articles"
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            แก้ไขบทความ
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            แก้ไขเนื้อหาบทความที่มีอยู่
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
            รูปภาพหลัก
          </label>
          {image ? (
            <div className="relative group rounded-xl overflow-hidden">
              <img
                src={image}
                alt="Preview"
                className="w-full h-48 object-cover rounded-xl"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm"
              >
                คลิกเพื่อเปลี่ยน
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="w-full h-48 border-2 border-dashed border-white/10 rounded-xl hover:border-blue-500/30 transition-all flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-blue-400"
            >
              {uploading ? (
                <Loader2 className="w-8 h-8 animate-spin" />
              ) : (
                <>
                  <Upload className="w-8 h-8" />
                  <span className="text-sm font-medium">
                    คลิกเพื่ออัปโหลดรูปภาพ
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

        {/* Title & Slug & Category */}
        <div className="bg-slate-900 rounded-2xl border border-white/5 p-6 space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              หัวข้อบทความ *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Slug (URL) *
            </label>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-sm">/blog/</span>
              <input
                type="text"
                value={form.slug}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, slug: e.target.value }))
                }
                className="flex-1 bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
              />
            </div>
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
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
            >
              <option value="">เลือกหมวดหมู่</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Excerpt */}
        <div className="bg-slate-900 rounded-2xl border border-white/5 p-6">
          <label className="block text-sm font-bold text-slate-300 mb-2">
            คำอธิบายย่อ *
          </label>
          <textarea
            value={form.excerpt}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, excerpt: e.target.value }))
            }
            rows={3}
            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
          />
        </div>

        {/* Content */}
        <div className="bg-slate-900 rounded-2xl border border-white/5 p-6">
          <label className="block text-sm font-bold text-slate-300 mb-2">
            เนื้อหาบทความ (Markdown) *
          </label>
          <textarea
            value={form.content}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, content: e.target.value }))
            }
            rows={15}
            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-y font-mono text-sm leading-relaxed"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            onClick={() => handleSubmit()}
            disabled={saving}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            บันทึก
          </button>
          <button
            onClick={() => handleSubmit(true)}
            disabled={saving}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
            บันทึกและเผยแพร่
          </button>
        </div>
      </div>
    </div>
  );
}
