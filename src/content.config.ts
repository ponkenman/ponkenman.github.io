import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const grades = ['SS', 'S', 'A', 'B', 'C', 'D', 'F'] as const;

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/reviews' }),
  schema: z.object({
    dateReviewed: z.date(),
    difficulty: z.number().min(0).max(5),
    delivery: z.number().min(0).max(5),
    effort: z.number().min(0).max(5),
    enjoyment: z.number().min(0).max(5),
    id: z.string(),
    longTitle: z.string(),
    rating: z.enum(grades),
    tags: z.array(z.string()),
    utility: z.number().min(0).max(5),
  }),
});

export const collections = { reviews };

export type Rating = (typeof grades)[number];

export interface ReviewData {
  dateReviewed: Date;
  difficulty: number;
  delivery: number;
  effort: number;
  enjoyment: number;
  id: string;
  longTitle: string;
  rating: (typeof grades)[number];
  tags: string[];
  utility: number;
};
