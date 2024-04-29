import { Resend } from "resend"
import { EnvisionEmail } from "@/components/email"
import { eq } from "drizzle-orm"
import { db } from "@/lib/backend/db"
import { envision } from "@/lib/backend/schema/envision"
import "dotenv/config"

const RESEND_API_KEY = process.env.RESEND_API_KEY!

const resend = new Resend(RESEND_API_KEY)

db.select().from(envision).where(eq(envision.accepted, true)).then(async (accepted) => { 
    const emailJobs=[]
    for (let pariticipant of accepted) { 
        const {first_name,last_name }=pariticipant
        emailJobs.push(resend.emails.send({
            from: "Envision@esperanza-club.tech",
            to: "benaouichalinaa@gmail.com",
            subject: "Envision Invitation",
            react: EnvisionEmail({ firstName: first_name, lastName: last_name }),
        }).then(() => {
            console.log(`${first_name} ${last_name} email got sent`)
        }))
        
    }

    await Promise.all(emailJobs)

    console.log(`${emailJobs.length} Emails Finished sending`)
})

