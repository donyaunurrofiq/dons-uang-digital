import type { ReactNode } from "react";

export function SectionHeader({
  title,
  description,
  action,
  align = "left",
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
}) {
  if (align === "center") {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-muted-foreground">{description}</p>}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}
