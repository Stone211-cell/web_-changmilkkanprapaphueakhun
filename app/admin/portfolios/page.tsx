"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Plus, Edit3, Trash2, Briefcase, Star, Search } from "lucide-react";

interface Portfolio {
  id: string;
  title: string;
  description: string | null;
  image: string;
  category: string | null;
  featured: boolean;
  displayOrder: number;
  createdAt: string;
}

export default function PortfoliosPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchPortfolios = async () => {
    try {
      const res = await axios.get("/api/portfolios");
      setPortfolios(res.data);
    } catch (error) {
      console.error("Failed to fetch portfolios:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      await axios.put(`/api/portfolios/${id}`, {
        featured: !currentStatus,
      });
      setPortfolios((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, featured: !currentStatus } : p
        )
      );
    } catch (error) {
      console.error("Failed to toggle featured:", error);
    }
  };

  const deletePortfolio = async (id: string) => {
    if (!confirm("คุณต้องการลบผลงานนี้ใช่ไหม?")) return;
    setDeleting(id);
    try {
      await axios.delete(`/api/portfolios/${id}`);
      setPortfolios((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Failed to delete portfolio:", error);
    } finally {
      setDeleting(null);
    }
  };

  const filtered = portfolios.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.category || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            ผลงาน
          </h1>
          <p className="text-slate-400 mt-1">
            จัดการประวัติการทำงานและผลงานทั้งหมด
          </p>
        </div>
        <Link
          href="/admin/portfolios/new"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20"
        >
          <Plus className="w-4 h-4" />
          เพิ่มผลงาน
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="ค้นหาผลงาน..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
        />
      </div>

      {/* Portfolio Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-slate-900 rounded-2xl border border-white/5">
          <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400 font-medium">ยังไม่มีผลงาน</p>
          <Link
            href="/admin/portfolios/new"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mt-4 text-sm font-bold"
          >
            <Plus className="w-4 h-4" />
            เพิ่มผลงานแรก
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((portfolio) => (
            <div
              key={portfolio.id}
              className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {portfolio.featured && (
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-amber-500/90 text-white text-[10px] font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" fill="currentColor" />
                    แนะนำ
                  </div>
                )}
                {portfolio.category && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold">
                    {portfolio.category}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-1 truncate">
                  {portfolio.title}
                </h3>
                {portfolio.description && (
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {portfolio.description}
                  </p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                  <button
                    onClick={() =>
                      toggleFeatured(portfolio.id, portfolio.featured)
                    }
                    className={`p-2 rounded-lg transition-all ${
                      portfolio.featured
                        ? "text-amber-400 hover:bg-amber-500/10"
                        : "text-slate-500 hover:bg-white/5"
                    }`}
                    title={
                      portfolio.featured
                        ? "ยกเลิกแนะนำ"
                        : "ตั้งเป็นผลงานแนะนำ"
                    }
                  >
                    <Star
                      className="w-4 h-4"
                      fill={portfolio.featured ? "currentColor" : "none"}
                    />
                  </button>
                  <Link
                    href={`/admin/articles/${portfolio.id}/edit`}
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => deletePortfolio(portfolio.id)}
                    disabled={deleting === portfolio.id}
                    className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all disabled:opacity-50 ml-auto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
