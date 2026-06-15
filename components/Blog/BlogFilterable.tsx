"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Calendar, Tag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
}

interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  createdAt: Date;
  categoryId?: string | null;
  categoryName?: string | null;
}

interface BlogFilterableProps {
  items: ArticleItem[];
  categories: Category[];
}

export default function BlogFilterable({ items, categories }: BlogFilterableProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Filter by category
      const matchCategory =
        activeCategory === "all" || item.categoryId === activeCategory;
      // Filter by search query
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.categoryName || "").toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [items, activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 relative z-20">
        
        {/* Category Toggles (Segmented Control style) */}
        <div className="flex w-full md:w-auto overflow-x-auto md:flex-wrap items-center justify-start md:justify-center gap-2 p-1.5 bg-white rounded-2xl md:rounded-full shadow-sm border border-slate-200/60 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex-shrink-0 whitespace-nowrap relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
              activeCategory === "all"
                ? "text-white"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {activeCategory === "all" && (
              <motion.div
                layoutId="activeBlogCategory"
                className="absolute inset-0 bg-blue-600 rounded-full shadow-md pointer-events-none"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">ทั้งหมด</span>
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 whitespace-nowrap relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeCategory === cat.id
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeBlogCategory"
                  className="absolute inset-0 bg-blue-600 rounded-full shadow-md pointer-events-none"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <Search className="h-4 w-4" />
          </div>
          <Input
            type="text"
            placeholder="ค้นหาบทความ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 pr-4 py-6 rounded-2xl md:rounded-full bg-white border-slate-200/60 shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all duration-300 w-full"
          />
        </div>
      </div>

      {/* Results Grid */}
      <motion.div layout className="min-h-[400px]">
        {filteredItems.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-2 h-full"
                  >
                    <div className="relative w-full aspect-[16/10]">
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      {post.image && (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                      )}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-1.5 shadow-sm">
                          <Tag className="w-3 h-3" />
                          {post.categoryName || "ทั่วไป"}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center text-xs text-slate-500 gap-1.5 mb-4">
                          <Calendar className="w-4 h-4" />
                          <time>
                            {new Date(post.createdAt).toLocaleDateString("th-TH", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 line-clamp-3 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center font-bold text-blue-600 text-sm mt-auto">
                        อ่านบทความ{" "}
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 border-dashed"
          >
            <Search className="h-12 w-12 mb-4 text-slate-300" />
            <p className="text-xl font-medium text-slate-600">ไม่พบบทความที่ค้นหา</p>
            <p className="text-sm mt-2 text-slate-500">ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่ใหม่</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
