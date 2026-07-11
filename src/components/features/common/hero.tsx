import type { ReactNode } from "react";

type Props = {
  title: string;
  tagline?: string;
  align?: "start" | "center";
  children?: ReactNode;
};

export default function Hero({
  align = "center",
  tagline,
  title,
  children,
}: Props) {
  return (
    <div className={`hero stack gap-4 ${align}`}>
      <div className="stack gap-2">
        <h1 className="title">{title}</h1>
        {tagline ? <p className="tagline">{tagline}</p> : null}
      </div>
      {children}
    </div>
  );
}
