import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const schema = z.object({
  tags: z.array(z.string()),
  image: z.string(),
  date: z.date(),
  badge: z.object({
    label: z.string(),
    variant: z.string(),
    color: z.string(),
  })
})

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema: schema,
    }),
    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**/*.md',
        prefix: '',
      },
      schema: schema,
    })
  },
})
