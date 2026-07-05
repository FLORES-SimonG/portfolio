import type { Metadata } from "next";
import Grid from "@/components/features/common/grid";
import TranslatedHero from "@/components/features/common/translated-hero";
import { getExperienceEntries } from "@/lib/experience";
import ExperienceCard from "@/components/features/experience/components/experience-card";

export const metadata: Metadata = {
  title: "My Experience | Simón G. Flores",
  description: "Learn about Simón G. Flores's most recent projects",
};

export default async function ExperiencePage() {
  const projects = await getExperienceEntries();

  return (
    <div className="stack gap-20">
      <main className="wrapper stack gap-8">
        <TranslatedHero
          titleKey="experience.title"
          taglineKey="experience.tagline"
          align="start"
        />
        <Grid variant="offset">
          {projects.map((project) => (
            <li key={project.slug.join("/")}>
              <ExperienceCard project={project} />
            </li>
          ))}
        </Grid>
      </main>
    </div>
  );
}
