import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/experience');

export type ExperienceEntry = {
  title: string;
  description: string;
  publishDate: Date;
  tags: string[];
  img: string;
  imgAlt?: string;
  slug: string[];
  content: string;
};

function slugify(value: string) {
  return value.toLowerCase();
}

function readMarkdownFiles(directory: string): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...readMarkdownFiles(fullPath));
      continue;
    }

    if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

export function getExperienceEntries(): ExperienceEntry[] {
  const files = readMarkdownFiles(CONTENT_DIR);

  const entries = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(raw);

    const relative = path.relative(CONTENT_DIR, filePath);
    const withoutExtension = relative.replace(/\.md$/i, '');
    const slug = withoutExtension.split(path.sep).map(slugify);

    return {
      title: parsed.data.title as string,
      description: parsed.data.description as string,
      publishDate: new Date(parsed.data.publishDate as string),
      tags: (parsed.data.tags as string[]) ?? [],
      img: parsed.data.img as string,
      imgAlt: parsed.data.img_alt as string | undefined,
      slug,
      content: parsed.content,
    };
  });

  return entries.sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf());
}

export function getExperienceBySlug(slug: string[]) {
  return getExperienceEntries().find((entry) => entry.slug.join('/') === slug.join('/'));
}
