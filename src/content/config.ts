import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	type: 'content',
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
