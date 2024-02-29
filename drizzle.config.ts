import { defineConfig } from "drizzle-kit"
import "dotenv/config"

export default defineConfig({
    schema: "./lib/backend/schema/*",
    out: "./lib/backend/migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.SUPABASE_CONNECTION_STRING!,
    },
    verbose: true,
    strict: true,
})
