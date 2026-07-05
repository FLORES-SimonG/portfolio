import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PillComponentProps {
  children: ReactNode;
  className?: string;
}

export default function PillComponent({
  children,
  className,
}: PillComponentProps) {
  return <div className={cn("pill", className)}>{children}</div>;
}
