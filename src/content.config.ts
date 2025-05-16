import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const reviews = defineCollection({
  loader: file("src/data/reviews/reviews.json"),
  schema: z.object({
        dateReviewed: z.string().date(),
        difficulty: z.number(),
        delivery: z.number(),
        effort: z.number(),
        enjoyment: z.number(),
        id: z.string(),
        longTitle: z.string(),
        rating: z.string(),
        tags: z.array(z.string()),
        utility: z.number()
  })
});

export const collections = { reviews };