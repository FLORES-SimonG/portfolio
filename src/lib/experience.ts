import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { routing } from "../i18n/routing";

const CONTENT_DIR = path.join(process.cwd(), "src/content/experience");

export type ExperienceEntry = {
  title: string;
  description: string;
  publishDate: Date;
  tags: string[];
  img: string;
  imgAlt?: string;
  slug: string[];
  language: "de" | "es" | "en";
  content: string;
};

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sortExperienceEntries(entries: ExperienceEntry[]) {
  return entries.sort(
    (a, b) => b.publishDate.valueOf() - a.publishDate.valueOf(),
  );
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

    if (entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function parseExperienceEntry(filePath: string): ExperienceEntry {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const title = parsed.data.title;
  const description = parsed.data.description;
  const publishDate = parsed.data.publishDate;
  const tags = parsed.data.tags;
  const img = parsed.data.img;

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof img !== "string"
  ) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: title, description and img are required strings.`,
    );
  }

  const parsedPublishDate = new Date(publishDate as string);
  if (!publishDate || Number.isNaN(parsedPublishDate.getTime())) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: publishDate is required and must be a valid date.`,
    );
  }

  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== "string")) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: tags must be an array of strings.`,
    );
  }

  const relative = path.relative(CONTENT_DIR, filePath).replace(/\\/g, "/");
  const withoutExtension = relative.replace(/\.md$/i, "");

  // If filename ends with a locale suffix (e.g. Tiendi.en), strip it for the slug
  const parts = withoutExtension.split(".");
  let slugBase = withoutExtension;
  let inferredLanguage: ExperienceEntry["language"] | undefined;
  const possibleLocale = parts[parts.length - 1];
  if (Array.from(routing.locales).includes(possibleLocale as any)) {
    slugBase = parts.slice(0, parts.length - 1).join(".");
    inferredLanguage = possibleLocale as ExperienceEntry["language"];
  }

  const slug = slugBase.split(path.sep).map(slugify);

  return {
    title,
    description,
    publishDate: parsedPublishDate,
    tags,
    img,
    language:
      (typeof parsed.data.language === "string"
        ? (parsed.data.language as ExperienceEntry["language"])
        : inferredLanguage) ?? (Array.from(routing.locales)[0] as ExperienceEntry["language"]),
    imgAlt:
      typeof parsed.data.img_alt === "string" ? parsed.data.img_alt : undefined,
    slug,
    content: parsed.content,
  };
}

function readExperienceEntries() {
  const files = readMarkdownFiles(CONTENT_DIR);
  return sortExperienceEntries(files.map(parseExperienceEntry));
}

export async function getExperienceEntries(): Promise<ExperienceEntry[]> {
  return readExperienceEntries();
}

export async function getExperienceBySlug(slug: string[]) {
  const entries = await getExperienceEntries();
  return entries.find((entry) => entry.slug.join("/") === slug.join("/"));
}
