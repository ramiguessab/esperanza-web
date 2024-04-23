import { Resend } from "resend"
import "dotenv/config"

const RESEND_API_KEY=process.env.RESEND_API_KEY!

const resend = new Resend(RESEND_API_KEY)

resend.emails.send({
  from: "envision@esperanza-club.tech",
  to: "boy73014@gmail.com",
  subject: "Envision Invitation",
  text: "Hello"
})