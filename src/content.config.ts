import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const reviews = defineCollection({
  loader: file(`src/data/reviews/reviews.json`),
  schema: z.object({
    dateReviewed: z.string().date(),
    difficulty: z.number().min(0).max(5),
    delivery: z.number().min(0).max(5),
    effort: z.number().min(0).max(5),
    enjoyment: z.number().min(0).max(5),
    id: z.string(),
    longTitle: z.string(),
    rating: z.enum(['S', 'A', 'B', 'C', 'D', 'F']),
    tags: z.array(z.string()),
    utility: z.number().min(0).max(5),
  }),
});

export const collections = { reviews };

export interface ReviewData {
  dateReviewed: string;
  difficulty: number;
  delivery: number;
  effort: number;
  enjoyment: number;
  id: string;
  longTitle: string;
  rating: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  tags: string[];
  utility: number;
};
