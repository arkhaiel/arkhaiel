// server/api/test/[slug].get.ts
export default defineEventHandler(async ({ context }) => {
  const db = context.cloudflare.env.DB // <- nom de ton binding D1
  if (!db) {
    throw createError({ statusCode: 500, statusMessage: 'Missing D1 binding DB' })
  }
  // évite un nom de table réservé comme "table"
  const { results } = await db.prepare('SELECT * FROM tooloo').all()
  return results
})