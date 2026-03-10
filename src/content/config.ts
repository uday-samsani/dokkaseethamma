import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    image: z.string().optional(),
    status: z.enum(['upcoming', 'past', 'cancelled']),
    description: z.string().optional(),
  }),
});

const galleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    category: z.enum(['events', 'activities', 'donations', 'volunteers', 'other']),
    description: z.string().optional(),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    content: z.string().optional(),
  }),
});

const sponsorsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    tier: z.enum(['platinum', 'gold', 'silver', 'bronze', 'partner']),
    website: z.string().optional(),
    description: z.string().optional(),
  }),
});

const newslettersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    pdf: z.string().optional(),
    content: z.string().optional(),
  }),
});

const transparencyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    month: z.string(),
    year: z.number(),
    donations: z.number(),
    expenses: z.number(),
    pdf: z.string().optional(),
    summary: z.string().optional(),
  }),
});

const membersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

const donationSettingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    upiQrCode: z.string().optional(),
    upiId: z.string(),
    accountName: z.string(),
    accountNumber: z.string(),
    ifscCode: z.string(),
    bankName: z.string(),
    branchName: z.string(),
    contactEmail: z.string(),
  }),
});

export const collections = {
  events: eventsCollection,
  gallery: galleryCollection,
  news: newsCollection,
  sponsors: sponsorsCollection,
  newsletters: newslettersCollection,
  transparency: transparencyCollection,
  members: membersCollection,
  'donation-settings': donationSettingsCollection,
};
