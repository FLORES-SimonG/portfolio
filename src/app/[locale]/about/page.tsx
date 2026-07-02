"use client";

import TranslatedHero from "@/components/TranslatedHero";
import { useTranslations } from "@/components/I18nProvider";

export default function AboutPage() {
  const t = useTranslations();
  return (
    <div className="stack gap-20">
      <main className="wrapper about">
        <TranslatedHero titleKey="about.title" />

        <section>
          <h2 className="section-title">Background</h2>
          <div className="content">
            <p>{t("about.firstParagraph")}</p>

            <br />
            <p>{t("about.secondParagraph")}</p>
            <br />
            <p>{t("about.thirdParagraph")}</p>
            <br />

            <p>{t("about.fourthParagraph")}</p>
          </div>
        </section>
        <section>
          <h2 className="section-title">Education</h2>
          <div className="content">
            <p>Full-Stack Developer - Henry</p>
            <p>
              University Technician in Chemistry - Universidad Tecnológica
              Nacional Villa María
            </p>
          </div>
        </section>
        <section>
          <h2 className="section-title">Skills</h2>
          <div className="content">
            <p>
              React | Angular | NextJS | Typescript | JavaScript | Figma |
              Leadership | Tailwind | Astro | PostgreSQL | NodeJS
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
