"use server"
import { db } from "@/lib/backend/db";
import { ContactUs } from "@/lib/backend/schema/messages";
export async function insert_message(name: string, email: string, subject: string, message: string) {
  await db.insert(ContactUs).values({
	Name: name,
	Email: email,
	Message: message,
	Subject: subject,
  });
}