import React from "react"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"

import RegistrationButton from "@/components/registration/Button"

export default function Home() {
    return (
        <main className="h-screen flex flex-col justify-center items-center gap-4 text-center">
            <Image
                alt="esperanza club logo"
                src={"/assets/icon_logo.svg"}
                height={256 * 2}
                width={256 * 2}
                className="animate-rotate mb-16 h-36 md:h-52"
            />
            <h1 className="uppercase text-4xl font-bold">
                Esperanza <span className="text-bluecyan">Club</span>
            </h1>
            <h2 className="text-2xl font-semibold">
                We Live Once,Let&apos;s Leave a Print
            </h2>
            <h3 className="text-xl font-medium">For Those Who Have Passion</h3>
            <RegistrationButton />
            <br />
            <h1 className="text-xl font-semibold">Follow Us</h1>
            <div className="flex gap-5">
                <a
                    href="https://www.facebook.com/esperanzaclub1"
                    target="_blank"
                >
                    <FaFacebook className="size-7" />
                </a>
                <a
                    href="https://www.instagram.com/esperanza_club/"
                    target="_blank"
                >
                    <FaInstagram className="size-7" />
                </a>
                <a
                    href="https://www.tiktok.com/@esperanza.club?_t=8kJsEKxlNA6&_r=1"
                    target="_blank"
                >
                    <FaTiktok className="size-7" />
                </a>
                <a
                    href="https://www.linkedin.com/company/esperanza-club/posts/?feedView=all"
                    target="_blank"
                >
                    <FaLinkedin className="size-7" />
                </a>
            </div>
        </main>
    )
}
