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
        "relative py-24 md:py-32 transition-all duration-700 ease-in-out",
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
                  hoveredIndex !== null && hoveredIndex !== idx ? "opacity-60 scale-[0.98]" : "opacity-100",
                  hoveredIndex === idx ? "border-blue-500/50 shadow-[0_20px_60px_rgba(37,99,235,0.15)] -translate-y-4" : ""
                )}
              >
                <CardPicture src={item.pic}></CardPicture>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div
        className={cn(
          "absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-blue-50/80 via-transparent to-blue-100/50",
          hoveredIndex !== null ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-[2.5rem] h-full w-full p-4 overflow-hidden transition-all duration-700 relative z-20 layout border bg-white border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
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
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn(
      "text-2xl md:text-3xl font-black tracking-tighter transition-all duration-500 leading-tight text-slate-800 group-hover:text-blue-600",
      className
    )}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 font-medium tracking-wide leading-relaxed text-sm md:text-base transition-all duration-500 text-slate-500 group-hover:text-slate-700",
        className
      )}
    >
      {children}
    </p>
  );
};
