import Homepage from "@/components/features/home/page/page";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

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
