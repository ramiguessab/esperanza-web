import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
export const ContactUs = pgTable("ContactUs", {
id : serial("id").primaryKey(),
Name : text("Name").notNull(),
Email : text("Email").notNull(),
Subject : text("Subject").notNull(),
Message : text("Message").notNull(),   
})

export type IInsertContactUs = typeof ContactUs.$inferInsert
export type ISelectContactUs = typeof ContactUs.$inferSelect