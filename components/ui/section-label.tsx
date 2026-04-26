import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-terra",
        className,
      )}
    >
      <span aria-hidden>✦</span>
      {children}
    </div>
  );
}
