import type { Config } from 'drizzle-kit'

export default {
  schema: './src/drizzle/schema.ts',
  out: './drizzle',
  driver: 'turso'
} satisfies Config
