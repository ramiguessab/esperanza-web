import { pgTable, varchar, bigserial } from "drizzle-orm/pg-core"

export const envision = pgTable("envision", {
    id: bigserial("id", { mode: "bigint" }).primaryKey(),
    first_name: varchar("first_name").notNull(),
    last_name: varchar("last_name").notNull(),
    email: varchar("email").notNull(),
    major: varchar("major").notNull(),
    year_of_study: varchar("year_of_study").notNull(),
    reason: varchar("reason").notNull(),
    what_startup_means: varchar("what_startup_means").notNull(),
})

export type IInsertEnvision = typeof envision.$inferInsert
export type ISelectEnvision = typeof envision.$inferSelect
