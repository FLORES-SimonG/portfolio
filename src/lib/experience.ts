import fs from 'node:fs';
import path from 'node:path';
import { cache } from 'react';
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
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
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

function parseExperienceEntry(filePath: string): ExperienceEntry {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);

  const title = parsed.data.title;
  const description = parsed.data.description;
  const publishDate = parsed.data.publishDate;
  const tags = parsed.data.tags;
  const img = parsed.data.img;

  if (typeof title !== 'string' || typeof description !== 'string' || typeof img !== 'string') {
    throw new Error(`Invalid frontmatter in ${filePath}: title, description and img are required strings.`);
  }

  if (!publishDate || Number.isNaN(new Date(publishDate as string).valueOf())) {
    throw new Error(`Invalid frontmatter in ${filePath}: publishDate is required and must be a valid date.`);
  }

  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== 'string')) {
    throw new Error(`Invalid frontmatter in ${filePath}: tags must be an array of strings.`);
  }

  const relative = path.relative(CONTENT_DIR, filePath);
  const withoutExtension = relative.replace(/\.md$/i, '');
  const slug = withoutExtension.split(path.sep).map(slugify);

  return {
    title,
    description,
    publishDate: new Date(publishDate as string),
    tags,
    img,
    imgAlt: typeof parsed.data.img_alt === 'string' ? parsed.data.img_alt : undefined,
    slug,
    content: parsed.content,
  };
}

const readExperienceEntries = cache(() => {
  const files = readMarkdownFiles(CONTENT_DIR);
  const entries = files.map(parseExperienceEntry);
  return entries.sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf());
});

export function getExperienceEntries(): ExperienceEntry[] {
  return process.env.NODE_ENV === 'development' ? readMarkdownFiles(CONTENT_DIR).map(parseExperienceEntry).sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()) : readExperienceEntries();
}

export function getExperienceBySlug(slug: string[]) {
  return getExperienceEntries().find((entry) => entry.slug.join('/') === slug.join('/'));
}
