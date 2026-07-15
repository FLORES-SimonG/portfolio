import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Grid from "@/components/features/common/grid";
import TranslatedHero from "@/components/features/common/translated-hero";
import ExperienceCard from "@/components/features/experience/components/experience-card";
import { getExperienceEntries } from "@/lib/experience";

async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("experience");

  return {
    title: t("title"),
    description: t("tagline"),
  };
}

export const metadata = generateMetadata();

export default async function ExperiencePage({ locale }: { locale: string }) {
  const projects = await getExperienceEntries();
  const filteredProjects = projects.filter(
    (project) => project.language === locale,
  );

  return (
    <div className="stack gap-20">
      <main className="wrapper stack gap-8">
        <TranslatedHero
          titleKey="experience.title"
          taglineKey="experience.tagline"
          align="start"
        />
        <Grid variant="offset">
          {filteredProjects.map((project) => (
            <li key={project.slug.join("/")}>
              <ExperienceCard project={project} />
            </li>
          ))}
        </Grid>
      </main>
    </div>
  );
}
