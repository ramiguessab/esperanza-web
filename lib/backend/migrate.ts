import { migrate } from "drizzle-orm/postgres-js/migrator"
import { db } from "./db"

migrate(db, { migrationsFolder: "./lib/backend/migrations" }).then(() => {
    console.log("migration finished")
})
