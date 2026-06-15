import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    period: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    order: z.number(),
    highlights: z.array(z.string()),
    links: z
      .object({
        website: z.string().optional(),
        github: z.string().optional(),
        gitlab: z.string().optional(),
        appStore: z.string().optional(),
        playStore: z.string().optional(),
      })
      .optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects, writing };
