import Link from 'next/link';
import type { ExperienceEntry } from '@/lib/experience';

export default function PortfolioPreview({ project }: { project: ExperienceEntry }) {
  return (
    <Link className="card" href={`/experience/${project.slug.join('/')}`}>
      <span className="title">{project.title}</span>
      <img src={project.img} alt={project.imgAlt || ''} loading="lazy" decoding="async" />
    </Link>
  );
}
