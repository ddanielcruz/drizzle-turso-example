import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

import { DATABASE_URL, DATABASE_AUTH_TOKEN } from '../config/database.js'

const client = createClient({
  url: DATABASE_URL,
  authToken: DATABASE_AUTH_TOKEN
})

export const db = drizzle(client)
