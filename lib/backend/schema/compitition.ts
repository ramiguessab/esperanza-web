import { pgTable, varchar, bigserial } from "drizzle-orm/pg-core"

export const compitition = pgTable("compitition", {
    id: bigserial("id", { mode: "bigint" }).primaryKey(),
    team_name: varchar("team_name").notNull(),
    email: varchar("email").notNull(),
    member1: varchar("member1").notNull(),
    member2: varchar("member2").notNull(),
    member3: varchar("member3").notNull(),
    member4: varchar("member4").notNull(),
    team_level: varchar("team_level").notNull(),
})

export type IInsertCompitition = typeof compitition.$inferInsert
export type ISelectCompitition = typeof compitition.$inferSelect
