import type { Metadata } from "next";
import Grid from "@/components/Grid";
import TranslatedHero from "@/components/TranslatedHero";
import PortfolioPreview from "@/components/experience-card";
import { getExperienceEntries } from "@/lib/experience";

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
              <PortfolioPreview project={project} />
            </li>
          ))}
        </Grid>
      </main>
    </div>
  );
}
