import type { ReactNode } from "react";

export default function PillComponent({ children }: { children: ReactNode }) {
  return <div className="pill">{children}</div>;
}
