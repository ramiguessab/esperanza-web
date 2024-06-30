"use server"
import { db } from "@/lib/backend/db"
import { ContactUs, ISelectContactUs } from "@/lib/backend/schema/messages"
import MessagesTable from "@/components/admin/Contact/table"
   
export default async function Messages(){
    const messages = await db.select().from(ContactUs)
    
    return(
        <>
        <div className="flex flex-col justify-evenly items-center h-screen">
            <h1 className="text-4xl font-bold text-center">Messages</h1>
            <MessagesTable Messages={messages} />
        </div>
        </>
    )
}