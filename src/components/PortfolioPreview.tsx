import Image from 'next/image';
import Link from 'next/link';
import type { ExperienceEntry } from '@/lib/experience';

export default function PortfolioPreview({ project }: { project: ExperienceEntry }) {
  return (
    <Link className="card" href={`/experience/${project.slug.join('/')}`}>
      <span className="title">{project.title}</span>
      <Image src={project.img} alt={project.imgAlt || ''} fill sizes="(min-width: 50em) 50vw, 100vw" />
    </Link>
  );
}
