"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    pic: string;
    title: string;
    description?: string;
    link?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "relative py-32 transition-all duration-700 ease-in-out",
        hoveredIndex !== null ? "bg-slate-950" : "bg-white",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {items.map((item, idx) => (
            <a
              href="https://line.me/ti/p/cGh_RMYJky"
              key={idx}
              className="relative group block h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] bg-blue-600/10 blur-2xl rounded-[4rem] z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </AnimatePresence>

              <Card
                className={cn(
                  "transition-all duration-700",
                  hoveredIndex !== null && hoveredIndex !== idx ? "opacity-20 scale-95 blur-[2px]" : "opacity-100",
                  hoveredIndex === idx ? "border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.2)] -translate-y-4" : ""
                )}
                isDark={hoveredIndex !== null}
              >
                <CardPicture src={item.pic}></CardPicture>
                <CardTitle isDark={hoveredIndex !== null}>{item.title}</CardTitle>
                <CardDescription isDark={hoveredIndex !== null}>{item.description}</CardDescription>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div
        className={cn(
          "absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20",
          hoveredIndex !== null ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

export const Card = ({
  className,
  children,
  isDark
}: {
  className?: string;
  children: React.ReactNode;
  isDark?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[2.5rem] h-full w-full p-4 overflow-hidden transition-all duration-700 relative z-20 border",
        isDark
          ? "bg-slate-900/50 border-white/10 backdrop-blur-3xl shadow-2xl"
          : "bg-white border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 md:p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardPicture = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] mb-8 border border-slate-100/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-700">
      <Image
        className={cn("object-cover transition-transform duration-1000 group-hover:scale-110", className)}
        src={src}
        alt="ช่างมิลการประปา"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  isDark
}: {
  className?: string;
  children: React.ReactNode;
  isDark?: boolean;
}) => {
  return (
    <h4 className={cn(
      "text-2xl md:text-4xl font-black tracking-tighter transition-all duration-500 leading-tight",
      isDark ? "text-white group-hover:text-blue-400" : "text-slate-900",
      className
    )}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
  isDark
}: {
  className?: string;
  children: React.ReactNode;
  isDark?: boolean;
}) => {
  return (
    <p
      className={cn(
        "mt-6 font-bold tracking-wide leading-relaxed text-sm md:text-base transition-all duration-500",
        isDark ? "text-slate-300 opacity-80" : "text-slate-500",
        className
      )}
    >
      {children}
    </p>
  );
};
