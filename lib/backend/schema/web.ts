import { pgTable, varchar, pgEnum } from "drizzle-orm/pg-core"

export const web_conferences_enum = pgEnum("web_conferences", ["web2", "web3"])

export const web = pgTable("web", {
    full_name: varchar("full_name").notNull(),
    email: varchar("email").notNull(),
    academic_year: varchar("academic_year").notNull(),
    field_of_study: varchar("field_of_study").notNull(),
    interests: varchar("interests").notNull(),
    conference: web_conferences_enum("conference").notNull(),
})

export type IInsertWeb = typeof web.$inferInsert
export type ISelectWeb = typeof web.$inferSelect
