import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardService from "./CardService";

import { Cardtype } from "@/utils/type";
import Image from "next/image";

const CardContainer = ({ srcimg, alt, title }: Cardtype) => {
  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative h-36 sm:h-44 md:h-48 w-full overflow-hidden">
        <Image
          src={srcimg}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-3.5 sm:p-4 md:p-6 flex flex-col flex-grow">
        <div className="mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[8px] sm:text-[10px] font-bold text-blue-600 uppercase tracking-widest">บริการของเรา</span>
        </div>
        <h4 className="text-sm sm:text-base md:text-xl font-bold text-slate-800 leading-tight mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-[10px] sm:text-sm text-slate-500 line-clamp-2 font-light mt-1 sm:mt-0">
          ดูแลโดยช่างผู้เชี่ยวชาญ พร้อมเครื่องมือที่ทันสมัย และการรับประกันผลงาน
        </p>
        <div className="mt-auto pt-3 sm:pt-6 flex items-center text-blue-600 text-xs sm:text-sm font-bold group-hover:gap-2 transition-all">
          <span>รายละเอียดเพิ่มเติม</span>
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default CardContainer;
