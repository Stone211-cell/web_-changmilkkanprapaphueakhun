import Link from "next/link";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,

} from "@fortawesome/free-brands-svg-icons";
import { cn } from "@/lib/utils";

type classtype = {
  pops?: string;
  sizeicon?: "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "5x" | "10x";
  coloricon?: string;
  LINKBTN?: string | undefined;
  msg?: string;
  description?: string;
  icontype?: IconProp;
  classtype?: string
};

export const ContactIcon = ({
  pops,
  sizeicon,
  coloricon,
  icontype,
  LINKBTN,
  msg,
  description,
  classtype
}: classtype) => {
  const LinkDefault = "https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr";

  const getIconColor = () => {
    switch (coloricon) {
      case 'blue': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'red': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'green': return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'white': return 'text-white bg-white/10 border-white/20';
      default: return 'text-slate-600 bg-slate-100 border-slate-200';
    }
  };

  return (
    <Link
      href={LINKBTN ?? LinkDefault}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col items-center justify-center text-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-[2rem] transition-all duration-500 h-full w-full border backdrop-blur-3xl shadow-xl",
        classtype || "bg-slate-900 text-white border-white/10 hover:border-blue-500/60 hover:shadow-blue-500/20 hover:shadow-2xl hover:bg-slate-800/90 hover:-translate-y-2 hover:scale-[1.03]"
      )}
    >
      <div className={cn(
        "flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-500 border group-hover:rotate-[360deg] group-hover:scale-110 shadow-lg",
        getIconColor()
      )}>
        <FontAwesomeIcon
          icon={icontype ?? faFacebook}
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8"
          size={sizeicon === '2x' ? 'lg' : sizeicon}
        />
      </div>

      <div className="flex flex-col min-w-0 transition-all duration-500 items-center justify-center w-full mt-1 sm:mt-2">
        <span className={cn(
          "text-xs sm:text-sm md:text-lg font-black leading-tight mb-0.5 sm:mb-1 whitespace-nowrap text-center",
          coloricon === 'white' ? 'text-white' : 'text-white'
        )}>
          {msg}
        </span>
        <span className={cn(
          "text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider sm:tracking-widest leading-snug break-words max-w-full",
          coloricon === 'white' ? 'text-slate-300 opacity-80' : 'text-blue-400 opacity-90',
          pops === 'hidden' ? 'hidden sm:block' : 'block'
        )}>
          {description}
        </span>
      </div>
    </Link>
  );
};
