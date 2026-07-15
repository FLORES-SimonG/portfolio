import type { Metadata } from "next";

import Homepage from "@/components/features/home/page/page";

export default function HomePage() {
  return <Homepage />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Simón G. Flores - Portfolio",
    description: "Full-Stack Developer",
  };
}
