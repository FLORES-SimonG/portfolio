import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Icon from "@/components/features/common/Icon";
import Hero from "@/components/features/common/hero";
import PillComponent from "@/components/features/common/pill-component";
import { getExperienceBySlug } from "@/lib/experience";

type Props = {
  params: Promise<{ slug: string[]; language: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const entry = await getExperienceBySlug(slug);

  if (!entry) {
    return {
      title: "Not Found",
      description: "404 Error — this page was not found",
    };
  }

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function ExperienceEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = await getExperienceBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="stack gap-15 pb-20">
      <header className="experience-entry-header">
        <div className="wrapper stack gap-2">
          <Link className="back-link" href="/experience/">
            <Icon icon="arrow-left" /> 
            <p>Experience</p>
          </Link>
          <Hero title={entry.title} align="start">
            <div className="details">
              <div className="tags">
                {entry.tags.map((tag) => (
                  <PillComponent key={tag}>{tag}</PillComponent>
                ))}
              </div>
              <p className="description">{entry.description}</p>
            </div>
          </Hero>
        </div>
      </header>
      <main className="wrapper">
        <div className="stack gap-10 content">
          {entry.img ? (
            <Image
              src={entry.img}
              alt={entry.imgAlt || entry.title}
              width={1200}
              height={800}
            />
          ) : null}
          <div className="content markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {entry.content}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}
