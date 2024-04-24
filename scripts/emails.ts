import { Resend } from "resend"
import { EnvisionEmail } from "@/components/email"
import "dotenv/config"

const RESEND_API_KEY = process.env.RESEND_API_KEY!

const resend = new Resend(RESEND_API_KEY)

resend.emails.send({
    from: "Envision@esperanza-club.tech",
    to: "benaouichalinaa@gmail.com",
    subject: "Envision Invitation",
    react: EnvisionEmail({ firstName: "Lina", lastName: "Benaouicha" }),
})
