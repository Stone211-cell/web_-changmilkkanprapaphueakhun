"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import PerformanceContainer from "./PerformanceContainer";

interface Category {
  id: string;
  name: string;
}

interface PortfolioItem {
  id: string;
  image: string;
  name: string;
  categoryId?: string | null;
  categoryName?: string | null;
  videoUrl?: string | null;
  mediaType?: string;
}

interface PerformanceFilterableProps {
  items: PortfolioItem[];
  categories: Category[];
}

export default function PerformanceFilterable({
  items,
  categories,
}: PerformanceFilterableProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Filter by category
      const matchCategory =
        activeCategory === "all" || item.categoryId === activeCategory;
      // Filter by search query
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.categoryName || "").toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [items, activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 px-4 max-w-7xl mx-auto relative z-20">
        
        {/* Category Toggles (Segmented Control style) */}
        <div className="flex w-full md:w-auto overflow-x-auto md:flex-wrap items-center justify-start md:justify-center gap-2 p-1.5 bg-slate-100/80 md:rounded-full rounded-2xl shadow-inner border border-slate-200/50 backdrop-blur-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex-shrink-0 whitespace-nowrap relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
              activeCategory === "all"
                ? "text-white"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
            }`}
          >
            {activeCategory === "all" && (
              <motion.div
                layoutId="activeCategory"
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
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategory"
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
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <Search className="h-5 w-5" />
          </div>
          <Input
            type="text"
            placeholder="ค้นหาผลงาน..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-6 rounded-full bg-white border-slate-200 shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all duration-300 w-full"
          />
        </div>
      </div>

      {/* Results Grid */}
      <motion.div 
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-10 max-w-[1400px] mx-auto min-h-[400px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <PerformanceContainer
                  image={item.image}
                  name={item.name}
                  videoUrl={item.videoUrl}
                  mediaType={item.mediaType}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full flex flex-col items-center justify-center py-20 text-slate-500"
            >
              <Search className="h-12 w-12 mb-4 text-slate-300" />
              <p className="text-xl font-medium">ไม่พบผลงานที่ค้นหา</p>
              <p className="text-sm mt-2">ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่ใหม่</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
