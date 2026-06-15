"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FileText, Briefcase, TrendingUp, Activity } from "lucide-react";

interface Stats {
  articles: number;
  portfolios: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ articles: 0, portfolios: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [articlesRes, portfoliosRes] = await Promise.all([
          axios.get("/api/articles?all=true"),
          axios.get("/api/portfolios"),
        ]);
        setStats({
          articles: articlesRes.data.length,
          portfolios: portfoliosRes.data.length,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const cards = [
    {
      title: "บทความทั้งหมด",
      value: stats.articles,
      icon: FileText,
      color: "blue",
      href: "/admin/articles",
    },
    {
      title: "ผลงานทั้งหมด",
      value: stats.portfolios,
      icon: Briefcase,
      color: "emerald",
      href: "/admin/portfolios",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "from-blue-600 to-blue-700 shadow-blue-600/20",
    emerald: "from-emerald-600 to-emerald-700 shadow-emerald-600/20",
  };

  const iconBgMap: Record<string, string> = {
    blue: "bg-blue-500/20 text-blue-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white tracking-tight">
          Dashboard
        </h1>
        <p className="text-slate-400 mt-2">
          ยินดีต้อนรับกลับ! นี่คือภาพรวมของเว็บไซต์ช่างมิลการประปา
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorMap[card.color]} p-6 shadow-xl hover:scale-[1.02] transition-transform duration-200 group`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-8 translate-x-8" />
            <div className="relative z-10">
              <div
                className={`w-12 h-12 rounded-xl ${iconBgMap[card.color]} flex items-center justify-center mb-4`}
              >
                <card.icon className="w-6 h-6" />
              </div>
              <p className="text-white/70 text-sm font-medium">{card.title}</p>
              <p className="text-4xl font-black text-white mt-1">
                {loading ? "..." : card.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900 rounded-2xl border border-white/5 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          การดำเนินการด่วน
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/admin/articles/new"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all text-white group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">เพิ่มบทความใหม่</p>
              <p className="text-xs text-slate-500">สร้างบทความหรือสาระน่ารู้</p>
            </div>
          </a>
          <a
            href="/admin/portfolios/new"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all text-white group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">เพิ่มผลงานใหม่</p>
              <p className="text-xs text-slate-500">
                เพิ่มประวัติการทำงานเป็นการ์ด
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* System Info */}
      <div className="mt-8 bg-slate-900 rounded-2xl border border-white/5 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          สถานะระบบ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-xs text-slate-500 mb-1">Database</p>
            <p className="text-sm font-bold text-emerald-400">
              Supabase (PostgreSQL)
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-xs text-slate-500 mb-1">Authentication</p>
            <p className="text-sm font-bold text-blue-400">Clerk</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5">
            <p className="text-xs text-slate-500 mb-1">Keep-alive</p>
            <p className="text-sm font-bold text-amber-400">
              ทุก 3 วัน (cron)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
