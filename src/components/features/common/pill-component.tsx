import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

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
