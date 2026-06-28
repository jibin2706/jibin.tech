import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ pattern: '**/index.md', base: './src/content/blog', generateId: ({ entry }) => entry.replace(/\/index\.md$/, '') }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		info: z.string(),
		tags: z.array(z.string()),
		featured: z.boolean().optional(),
		image: z.string().optional(),
	}),
})

export const collections = { blog }
