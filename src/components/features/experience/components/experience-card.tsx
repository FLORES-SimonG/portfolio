import Image from "next/image";
import Link from "next/link";
import type { ExperienceEntry } from "@/lib/experience";

interface ExperienceCardProps {
  project: ExperienceEntry;
}

export default function ExperienceCard({
  project,
}: ExperienceCardProps) {
  return (
    <Link className="card" href={`/experience/${project.slug.join(`-${project.language}`)}`}>
      <span className="title">{project.title}</span>
      <Image
        src={project.img}
        alt={project.imgAlt || ""}
        fill
        sizes="(min-width: 50em) 50vw, 100vw"
      />
    </Link>
  );
}
