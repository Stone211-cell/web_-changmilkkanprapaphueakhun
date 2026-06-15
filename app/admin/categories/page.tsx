"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FolderPlus, Trash2, Edit2, Loader2, BookOpen, Briefcase, Plus, X, Save } from "lucide-react";

interface Category {
  id: string;
  name: string;
  type: "ARTICLE" | "PORTFOLIO";
  createdAt: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ฟอร์มเพิ่ม/แก้ไข
  const [name, setName] = useState("");
  const [type, setType] = useState<"ARTICLE" | "PORTFOLIO">("ARTICLE");
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/categories");
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      setError("ไม่สามารถโหลดหมวดหมู่ได้");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const resetForm = () => {
    setName("");
    setEditingId(null);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim()) {
      setError("กรุณากรอกชื่อหมวดหมู่");
      return;
    }

    setSaving(true);
    try {
      if (editingId) {
        await axios.put(`/api/categories/${editingId}`, { name, type });
        setSuccess("อัปเดตหมวดหมู่สำเร็จ");
      } else {
        await axios.post("/api/categories", { name, type });
        setSuccess("เพิ่มหมวดหมู่สำเร็จ");
      }
      resetForm();
      fetchCategories();
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 409) {
        setError("ชื่อหมวดหมู่นี้มีอยู่แล้ว");
      } else {
        setError("ดำเนินการไม่สำเร็จ");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (cat: Category) => {
    setName(cat.name);
    setType(cat.type);
    setEditingId(cat.id);
    setError("");
    setSuccess("");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("คุณแน่ใจหรือไม่ที่จะลบหมวดหมู่นี้? บทความ/ผลงานในหมวดหมู่นี้จะเปลี่ยนเป็น 'ไม่มีหมวดหมู่'")) return;

    setError("");
    setSuccess("");
    try {
      await axios.delete(`/api/categories/${id}`);
      setSuccess("ลบหมวดหมู่สำเร็จ");
      fetchCategories();
      if (editingId === id) resetForm();
    } catch (err) {
      console.error(err);
      setError("ลบหมวดหมู่ไม่สำเร็จ");
    }
  };

  const articlesCats = categories.filter((c) => c.type === "ARTICLE");
  const portfoliosCats = categories.filter((c) => c.type === "PORTFOLIO");

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
          <FolderPlus className="w-8 h-8 text-blue-500" />
          จัดการหมวดหมู่
        </h1>
        <p className="text-slate-400 mt-2 text-sm">
          เพิ่ม ลบ หรือแก้ไขหมวดหมู่สำหรับบทความสาระน่ารู้ และการ์ดผลงานประปา
        </p>
      </div>

      {/* Notifications */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium flex justify-between items-center">
          <span>{error}</span>
          <button onClick={() => setError("")}><X className="w-4 h-4" /></button>
        </div>
      )}
      {success && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium flex justify-between items-center">
          <span>{success}</span>
          <button onClick={() => setSuccess("")}><X className="w-4 h-4" /></button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Panel */}
        <div className="bg-slate-900 rounded-2xl border border-white/5 p-6 h-fit sticky top-24">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            {editingId ? <Edit2 className="w-5 h-5 text-amber-400" /> : <Plus className="w-5 h-5 text-blue-400" />}
            {editingId ? "แก้ไขหมวดหมู่" : "เพิ่มหมวดหมู่ใหม่"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">
                ชื่อหมวดหมู่ *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="เช่น: ติดตั้งสุขภัณฑ์, ปัญหาปั๊มน้ำ"
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">
                ประเภทหมวดหมู่ *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setType("ARTICLE")}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    type === "ARTICLE"
                      ? "bg-blue-600/20 border-blue-500 text-blue-400"
                      : "bg-slate-800 border-white/5 text-slate-400 hover:bg-slate-850"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  บทความ
                </button>
                <button
                  type="button"
                  onClick={() => setType("PORTFOLIO")}
                  className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    type === "PORTFOLIO"
                      ? "bg-emerald-600/20 border-emerald-500 text-emerald-400"
                      : "bg-slate-800 border-white/5 text-slate-400 hover:bg-slate-850"
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  ผลงาน
                </button>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                disabled={saving}
                className={`flex-1 flex items-center justify-center gap-2 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all disabled:opacity-50 ${
                  type === "ARTICLE"
                    ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20"
                    : "bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20"
                }`}
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : editingId ? (
                  <Save className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                {editingId ? "บันทึกการแก้ไข" : "เพิ่มหมวดหมู่"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all"
                >
                  ยกเลิก
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Lists Panel */}
        <div className="lg:col-span-2 space-y-6">
          {loading ? (
            <div className="bg-slate-900 rounded-2xl border border-white/5 p-12 flex justify-center items-center">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            </div>
          ) : (
            <>
              {/* Articles Categories */}
              <div className="bg-slate-900 rounded-2xl border border-white/5 p-6">
                <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  หมวดหมู่บทความ ({articlesCats.length})
                </h2>

                {articlesCats.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-6">ยังไม่มีหมวดหมู่บทความ</p>
                ) : (
                  <div className="divide-y divide-white/5">
                    {articlesCats.map((cat) => (
                      <div key={cat.id} className="flex justify-between items-center py-3 group">
                        <span className="text-slate-300 text-sm font-medium">{cat.name}</span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleEdit(cat)}
                            className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-all"
                            title="แก้ไข"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(cat.id)}
                            className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-all"
                            title="ลบ"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Portfolios Categories */}
              <div className="bg-slate-900 rounded-2xl border border-white/5 p-6">
                <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-400" />
                  หมวดหมู่ผลงาน ({portfoliosCats.length})
                </h2>

                {portfoliosCats.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-6">ยังไม่มีหมวดหมู่ผลงาน</p>
                ) : (
                  <div className="divide-y divide-white/5">
                    {portfoliosCats.map((cat) => (
                      <div key={cat.id} className="flex justify-between items-center py-3 group">
                        <span className="text-slate-300 text-sm font-medium">{cat.name}</span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleEdit(cat)}
                            className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-all"
                            title="แก้ไข"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(cat.id)}
                            className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-all"
                            title="ลบ"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
