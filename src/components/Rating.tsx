import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  value,
  count,
  size = "sm",
  className,
}: {
  value: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const px = size === "sm" ? 14 : 18;
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={px}
            className={cn(
              i <= Math.round(value) ? "fill-star text-star" : "fill-border text-border",
            )}
          />
        ))}
      </div>
      <span className={cn("font-semibold text-foreground", size === "sm" ? "text-xs" : "text-sm")}>
        {value.toFixed(1)}
      </span>
      {count !== undefined && (
        <span className={cn("text-muted-foreground", size === "sm" ? "text-xs" : "text-sm")}>
          ({count} ulasan)
        </span>
      )}
    </div>
  );
}
