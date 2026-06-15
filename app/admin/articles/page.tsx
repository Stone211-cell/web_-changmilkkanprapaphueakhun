"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit3, Trash2, Eye, EyeOff, FileText, Search } from "lucide-react";
import { getArticles, togglePublishArticle, deleteArticleById } from "@/services/api";

// รูปแบบข้อมูลบทความ
interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  published: boolean;
  createdAt: string;
  image: string;
}

export default function ArticlesPage() {
  // สร้างตัวแปร State พื้นฐาน
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // ฟังก์ชันดึงข้อมูลบทความทั้งหมด
  const fetchArticles = async () => {
    try {
      // เรียกใช้ API แบบแยกไฟล์ที่เราสร้างไว้ (ใส่ all=true เพื่อให้ดึงแบบร่างมาด้วย)
      const data = await getArticles(true);
      setArticles(data);
    } catch (error) {
      console.error("ดึงข้อมูลบทความไม่สำเร็จ:", error);
    } finally {
      // ไม่ว่าจะสำเร็จหรือเกิดข้อผิดพลาด ก็หยุดโหลด
      setLoading(false);
    }
  };

  // ดึงข้อมูลครั้งแรกเมื่อเข้ามาหน้านี้
  useEffect(() => {
    fetchArticles();
  }, []);

  // ฟังก์ชันสลับสถานะ เผยแพร่/ซ่อน บทความ
  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    try {
      // เรียก API เปลี่ยนสถานะ
      await togglePublishArticle(id, currentStatus);
      
      // อัปเดต State ให้หน้าจอเปลี่ยนตาม
      const newArticles = articles.map((article) => {
        if (article.id === id) {
          // สลับค่า published
          return { ...article, published: !currentStatus };
        } else {
          return article;
        }
      });
      setArticles(newArticles);
      
    } catch (error) {
      console.error("เปลี่ยนสถานะไม่สำเร็จ:", error);
    }
  };

  // ฟังก์ชันลบบทความ
  const handleDelete = async (id: string) => {
    // ถามเพื่อความแน่ใจก่อนลบ
    const confirmDelete = confirm("คุณต้องการลบบทความนี้ใช่ไหม?");
    if (confirmDelete === false) {
      return; // ถ้ายกเลิก ก็ไม่ต้องทำอะไร
    }

    setDeletingId(id); // กำลังลบ
    try {
      // เรียก API ลบ
      await deleteArticleById(id);
      
      // ลบออกจาก State เพื่อให้หน้าจออัปเดต
      const remainingArticles = articles.filter((article) => article.id !== id);
      setArticles(remainingArticles);
    } catch (error) {
      console.error("ลบบทความไม่สำเร็จ:", error);
    } finally {
      setDeletingId(null); // ลบเสร็จแล้ว
    }
  };

  // ค้นหาบทความ (เอาเฉพาะที่มีคำที่เราพิมพ์)
  const filteredArticles = articles.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(search.toLowerCase());
    const categoryMatch = article.category.toLowerCase().includes(search.toLowerCase());
    
    // ถ้าเจอในชื่อ หรือ เจอในหมวดหมู่ ให้แสดงบทความนั้น
    if (titleMatch === true || categoryMatch === true) {
      return true;
    } else {
      return false;
    }
  });

  // 1. ถ้ากำลังโหลดข้อมูล ให้แสดงรูปหมุนๆ
  if (loading === true) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // 2. โหลดเสร็จแล้ว มาจัดหน้าตากัน
  return (
    <div>
      {/* ส่วนหัว */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">บทความ</h1>
          <p className="text-slate-400 mt-1">จัดการบทความและสาระน่ารู้ทั้งหมด</p>
        </div>
        <Link
          href="/admin/articles/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20"
        >
          <Plus className="w-4 h-4" />
          เพิ่มบทความ
        </Link>
      </div>

      {/* ช่องค้นหา */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="ค้นหาบทความ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
        />
      </div>

      {/* ถ้ารายการที่ค้นหามามันว่างเปล่า ให้แสดงกล่อง "ยังไม่มีบทความ" */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-20 bg-slate-900 rounded-2xl border border-white/5">
          <FileText className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400 font-medium">ยังไม่มีบทความ</p>
          <Link href="/admin/articles/new" className="inline-flex items-center gap-2 text-blue-400 mt-4 text-sm font-bold">
            <Plus className="w-4 h-4" />
            สร้างบทความแรก
          </Link>
        </div>
      ) : (
        // ถ้ามีข้อมูล ก็วนลูปแสดงบทความทีละอัน
        <div className="space-y-3">
          {filteredArticles.map((article) => {
            
            // สร้างคลาสสำหรับปุ่ม เผยแพร่/แบบร่าง ให้อ่านง่ายๆ
            let statusClass = "";
            let statusText = "";
            
            if (article.published === true) {
              statusClass = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
              statusText = "เผยแพร่";
            } else {
              statusClass = "bg-amber-500/10 text-amber-400 border border-amber-500/20";
              statusText = "แบบร่าง";
            }

            return (
              <div
                key={article.id}
                className="bg-slate-900 border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-white/10 transition-all group"
              >
                {/* รูปภาพ */}
                {article.image && (
                  <div className="w-full sm:w-20 h-32 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
                    <img src={article.image} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* ข้อมูลบทความ */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {/* ป้ายบอกสถานะ */}
                    <span className={`inline-flex px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${statusClass}`}>
                      {statusText}
                    </span>
                    {/* ป้ายบอกหมวดหมู่ */}
                    <span className="text-[10px] text-slate-500 font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-sm truncate group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>

                {/* ปุ่มจัดการต่างๆ (ปิดตา, แก้ไข, ลบ) */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  
                  {/* ปุ่มเปิด/ปิดตา */}
                  <button
                    onClick={() => handleTogglePublish(article.id, article.published)}
                    className="p-2 rounded-lg transition-all text-slate-400 hover:text-emerald-400 hover:bg-white/5"
                  >
                    {article.published === true ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  
                  {/* ปุ่มแก้ไข */}
                  <Link href={`/admin/articles/${article.id}/edit`} className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-500/10">
                    <Edit3 className="w-4 h-4" />
                  </Link>
                  
                  {/* ปุ่มลบ */}
                  <button
                    onClick={() => handleDelete(article.id)}
                    disabled={deletingId === article.id}
                    className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 disabled:opacity-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
