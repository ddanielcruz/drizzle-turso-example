import { db } from './drizzle/connection.js'
import * as schema from './drizzle/schema.js'

// Create test users
// const timestamp = Date.now()
// for (let idx = 0; idx < 100; idx++) {
//   await db.insert(schema.users).values({ name: `User ${timestamp + idx}` })
// }

// Query users
const users = await db.select().from(schema.users).limit(10)
console.log(users)
