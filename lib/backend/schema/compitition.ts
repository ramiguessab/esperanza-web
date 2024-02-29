import { pgTable, varchar, pgEnum } from "drizzle-orm/pg-core"

export const compitition = pgTable("compitition", {
    team_name: varchar("team_name").notNull(),
    email: varchar("email").notNull(),
    member1: varchar("member1").notNull(),
    member2: varchar("member2").notNull(),
    member3: varchar("member3").notNull(),
    member4: varchar("member4").notNull(),
    team_level: varchar("team_level").notNull(),
})

export type IInsertCompition = typeof compitition.$inferInsert
export type ISelectCompition = typeof compitition.$inferSelect
