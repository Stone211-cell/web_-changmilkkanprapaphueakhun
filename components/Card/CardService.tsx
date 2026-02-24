import { CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CardService = ({ text, className }: { text: string; className?: string }) => {
  return (
    <CardDescription
      className={cn("text-center text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 leading-relaxed", className)}
    >
      {text}
    </CardDescription>
  );
};
export default CardService;
