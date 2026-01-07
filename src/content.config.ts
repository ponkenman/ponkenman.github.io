import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const grades = ['S', 'A', 'B', 'C', 'D', 'F'] as const;

const terms = ['1', '2', '3'] as const;

const schema = z.object({
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
  })

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
    offering: z.object({
      year: z.number().min(2024).max(2027),
      term: z.enum(terms),
    }),
    rating: z.enum(grades),
    sections: z.array(z.string()).optional(),
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
  offering: {
    year: number;
    term: (typeof terms)[number];
  }
  sections?: string[];
  rating: (typeof grades)[number];
  tags: string[];
  utility: number;
};
