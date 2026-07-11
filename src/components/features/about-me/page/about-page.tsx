import TranslatedHero from "@/components/features/common/translated-hero";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me and my background.",
};

export default async function AboutPage() {
  const t = await getTranslations("about");
  return (
    <div className="stack gap-20 p-8">
      <main className="wrapper about">
        <TranslatedHero titleKey="about.title" />
        <section>
          <h2 className="section-title">Background</h2>
          <div className="content">
            <p>{t("firstParagraph")}</p>
            <br />
            <p>{t("secondParagraph")}</p>
            <br />
            <p>{t("thirdParagraph")}</p>
            <br />
            <p>{t("fourthParagraph")}</p>
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
