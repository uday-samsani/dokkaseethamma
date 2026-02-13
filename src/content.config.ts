import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    description: z.string(),
    image: z.string().optional(),
    status: z.enum(['upcoming', 'past']),
  }),
});

const gallery = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    category: z.string(),
    description: z.string().optional(),
  }),
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    content: z.string(),
  }),
});

export const collections = { events, gallery, news };