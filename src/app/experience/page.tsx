import type { Metadata } from 'next';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import PortfolioPreview from '@/components/PortfolioPreview';
import { getExperienceEntries } from '@/lib/experience';

export const metadata: Metadata = {
  title: 'My Experience | Simón G. Flores',
  description: "Learn about Simón G. Flores's most recent projects",
};

export default async function ExperiencePage() {
  const projects = await getExperienceEntries();

  return (
    <div className="stack gap-20">
      <main className="wrapper stack gap-8">
        <Hero title="My Experience" tagline="See my most recent projects below to get an idea of my past experience." align="start" />
        <Grid variant="offset">
          {projects.map((project) => (
            <li key={project.slug.join('/')}>
              <PortfolioPreview project={project} />
            </li>
          ))}
        </Grid>
      </main>
    </div>
  );
}
