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
          className="p-2 w-11 h-11 flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer shadow-md shadow-blue-200 active:scale-90"
        >
          <AlignRight size={24} />
        </MenubarTrigger>
        <MenubarContent className="bg-white/95 backdrop-blur-md border border-blue-100 rounded-2xl shadow-xl p-2 min-w-[200px]" align="end">
          {List.map((item) => (
            <MenubarItem key={item.label} asChild className="rounded-xl px-4 py-2.5 focus:bg-blue-50 focus:text-blue-600 cursor-pointer mb-1 last:mb-0 transition-colors">
              <Link href={item.href} className="text-sm font-medium">{item.label}</Link>
            </MenubarItem>
          ))}
          <MenubarSeparator className="bg-blue-50 my-1" />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

  );
};
export default Dropdown;
