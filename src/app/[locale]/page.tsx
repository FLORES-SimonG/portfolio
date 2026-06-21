import Image from "next/image";
import TranslatedHero from "@/components/TranslatedHero";
import Skills from "@/components/Skills";
import PillSection from "@/components/pill-section";
import { IconName } from "@/components/Icon";
import { useTranslations } from "@/components/I18nProvider";

export default function HomePage() {
  const t = useTranslations();
  
const pillItems = [
    { icon: "code" as IconName, label: t('roles.developer') },
    { icon: "pencil-line" as IconName, label: t('roles.frontend') },
    { icon: "arrow-up" as IconName, label: t('roles.location') },
  ];

  return (
    <div className="stack gap-20 lg:gap-48">
      <div className="wrapper stack gap-8 lg:gap-20">
        <header className="home-hero">
          <TranslatedHero
            titleKey="hero.greeting"
            taglineKey="hero.tagline"
            align="start"
          >
            <PillSection items={pillItems} />
            
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
