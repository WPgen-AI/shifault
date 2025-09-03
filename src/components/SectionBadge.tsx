import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const SectionBadge = ({ children, icon, className }: SectionBadgeProps) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-colors",
      className
    )}>
      {icon ? icon : <span className="w-2 h-2 bg-primary rounded-full"></span>}
      {children}
    </div>
  );
};