import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Homepage from "@/components/features/home/page/page";

export default function HomePage() {
  return <Homepage />;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("nav");

  return {
    title: t("home") || "Home",
    description: "Simón G. Flores - Full-Stack Developer",
  };
}
