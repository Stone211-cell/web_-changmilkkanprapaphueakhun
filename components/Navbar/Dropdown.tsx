import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,

  MenubarTrigger,
} from "@/components/ui/menubar";

import { AlignRight } from "lucide-react";

import { List } from "@/utils/menulist";
import Link from "next/link";

const Dropdown = () => {
  return (
    <Menubar className="border-none bg-transparent shadow-none p-0">
      <MenubarMenu>
        <MenubarTrigger
          aria-label="Open menu"
          className="p-2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer shadow-md shadow-blue-200 active:scale-90"
        >
          <AlignRight size={20} className="sm:hidden" />
          <AlignRight size={24} className="hidden sm:block" />
        </MenubarTrigger>
        <MenubarContent className="bg-white/95 backdrop-blur-md border border-blue-100 rounded-2xl shadow-xl p-2 min-w-[220px]" align="end">
          {List.map((item) => (
            <MenubarItem key={item.label} asChild className="rounded-xl px-4 py-3 sm:py-2.5 focus:bg-blue-50 focus:text-blue-600 cursor-pointer mb-1 last:mb-0 transition-colors">
              <Link href={item.href} className="text-sm sm:text-sm font-medium">{item.label}</Link>
            </MenubarItem>
          ))}
          <MenubarSeparator className="bg-blue-50 my-1" />
          {/* Mobile-only quick call link */}
          <MenubarItem asChild className="rounded-xl px-4 py-3 sm:hidden focus:bg-blue-50 focus:text-blue-600 cursor-pointer transition-colors">
            <Link href="tel:0644088510" className="text-sm font-bold text-blue-600">📞 โทร 064-408-8510</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

  );
};
export default Dropdown;
