import type { ReactNode, AnchorHTMLAttributes } from "react";

type CallToActionProps = {
  href: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function CallToAction({ href, children, ...props }: CallToActionProps) {
  return (
    <a className="call-to-action" href={href} {...props}>
      {children}
    </a>
  );
}
