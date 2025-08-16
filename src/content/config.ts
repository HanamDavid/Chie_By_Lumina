import { z, defineCollection } from 'astro:content';

const infoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  'info': infoCollection,
};
