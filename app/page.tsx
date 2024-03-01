import React from "react"
import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import RegistrationButton from "@/components/registration/Button"
import Competition from "@/components/registration/Forms/Competition"
import Web2 from "@/components/registration/Forms/Web2"
import Web3 from "@/components/registration/Forms/Web3"

export default function Home() {
    return (
        <main className="bg-slate-900 h-screen flex flex-col justify-center items-center gap-4">
            <Image
                alt="esperanza club logo"
                src={"/assets/icon_logo.svg"}
                height={256 * 2}
                width={256 * 2}
                className="animate-rotate mb-16 h-36 md:h-52"
            />
            <h1 className="uppercase text-3xl sm:text-4xl font-bold">
                Esperanza <span className="text-bluecyan">Club</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold">
                We Live Once,Let&apos;s Leave a Print
            </h2>
            <h3 className="text-xl font-medium">For Those Who Have Passion</h3>
            <RegistrationButton />
            <br />
            <h1 className="text-xl font-semibold ">Follow Us</h1>
            <div className="flex gap-5">
                <a href="https://www.facebook.com/esperanzaclub1" ><FaFacebook className=" size-7"/></a>
                <a href="https://www.instagram.com/esperanza_club/" ><FaInstagram  className=" size-7"/></a>
                <a href="https://www.tiktok.com/@esperanza.club?_t=8kJsEKxlNA6&_r=1" ><FaTiktok className=" size-7"/></a>
                <a href="https://www.linkedin.com/company/esperanza-club/posts/?feedView=all" ><FaLinkedin className=" size-7"/></a>
            </div>
           
        </main>
    )
}
