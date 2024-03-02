import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as web from "./schema/web"
import * as compitition from "./schema/compitition"
import "dotenv/config"

const supabase = process.env.SUPABASE_CONNECTION_STRING!

const client = postgres(supabase)

export const db = drizzle(client, { schema: { ...web, ...compitition } })
