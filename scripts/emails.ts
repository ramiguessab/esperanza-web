import { Resend } from "resend"
import { EnvisionEmail } from "@/components/email"
import { eq,and } from "drizzle-orm"
import { db } from "@/lib/backend/db"
import { envision } from "@/lib/backend/schema/envision"
import "dotenv/config"

const RESEND_API_KEY = process.env.RESEND_API_KEY!

const resend = new Resend(RESEND_API_KEY)

db.select().from(envision).where(and(eq(envision.accepted, true),eq(envision.email_sent,false))).then(async (accepted) => { 

    for (let pariticipant of accepted) { 
        const {first_name,last_name,email }=pariticipant
        await resend.emails.send({
            from: "Envision@esperanza-club.tech",
            to: email,
            subject: "Envision Invitation",
            react: EnvisionEmail({ firstName: first_name, lastName: last_name }),
        })

        await db.update(envision).set({email_sent:true}).where(eq(envision.id,pariticipant.id))
        console.log(`${first_name} ${last_name} email got sent`)
    }


    console.log(`${accepted.length} Emails Finished sending`)
})

