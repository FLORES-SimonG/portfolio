import type { ReactNode } from "react";

export default function CallToAction({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="call-to-action" href={href}>
      {children}
    </a>
  );
}
