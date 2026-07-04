import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  // ฟังก์ชัน getDirection ต้องใส่ dependency direction
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  }, [direction]);

  // เปลี่ยน getSpeed ให้เป็น useCallback ด้วย และใส่ speed เป็น dependency
  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  // addAnimation ใส่ getDirection, getSpeed เป็น dependency
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[280px] sm:w-[360px] max-w-[85vw] shrink-0 rounded-2xl sm:rounded-3xl border border-blue-50 bg-white p-5 sm:p-6 md:p-8 md:w-[500px] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="mb-3 sm:mb-6 flex justify-between items-start">
                <svg width="28" height="22" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-200 sm:w-[40px] sm:h-[30px]">
                  <path d="M0 15V0H15V15H7.5C7.5 19.1421 10.8579 22.5 15 22.5V30C6.71573 30 0 23.2843 0 15ZM25 15V0H40V15H32.5C32.5 19.1421 35.8579 22.5 40 22.5V30C31.7157 30 25 23.2843 25 15Z" fill="currentColor" />
                </svg>
                {/* Google Logo */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <blockquote className="flex-grow">
                <p className="relative z-20 text-sm sm:text-base md:text-lg leading-relaxed font-medium text-slate-700 italic">
                  "{item.quote}"
                </p>
              </blockquote>
              <div className="mt-4 sm:mt-6 md:mt-8 flex items-center gap-3 sm:gap-4">
                <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-inner flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-slate-500">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
