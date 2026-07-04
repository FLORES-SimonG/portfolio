import Image from "next/image";
import TranslatedHero from "@/components/TranslatedHero";
import Skills from "@/components/Skills";
import PillSection from "@/components/pill-section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Simón G. Flores - Full-Stack Developer",
};

export default function HomePage() {
  return (
    <div className="stack gap-20 lg:gap-48">
      <div className="wrapper stack gap-8 lg:gap-20">
        <header className="home-hero">
          <TranslatedHero
            titleKey="hero.greeting"
            taglineKey="hero.tagline"
            align="start"
          >
            <PillSection />
          </TranslatedHero>

          <Image
            alt="Simon photo"
            width={480}
            height={620}
            src="/assets/SimonGF_1.jpg"
            priority
          />
        </header>
        <Skills />
      </div>
    </div>
  );
}
