import React from "react"
import Image from "next/image"
import IconLink from "@/components/shared/IconLink"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"

import RegistrationButton from "@/components/registration/Button"

export default function Home() {
    return (
        <main className="h-screen flex flex-col gap-4 justify-center items-center text-center ">
            <div className="absolute top-4 left-4 bg-envision_blue p-2 rounded-lg">
                <Image
                    alt="esperanza club logo"
                    src={"/assets/icon_logo.svg"}
                    height={64}
                    width={64}
                    className=""
                />
            </div>

            <Image
                alt="esperanza club logo"
                src={"/assets/envision-logo.svg"}
                height={64 * 3}
                width={64 * 3}
                className=""
            />

            <h2 className="text-3xl font-extrabold">
                Registration are opened for{" "}
                <span className="text-envision_blue">Envision Event</span>
            </h2>
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl uppercase font-bold">
                    Esperanza <span className="text-envision_blue">Club</span>
                </h1>
                <h3 className="text-sm font-semibold">
                    We Live Once,Let&apos;s Leave a Print
                </h3>
            </div>

            <RegistrationButton />
            <br />
            <div className="flex flex-col text-center">
                <h5 className="text-xl font-semibold">Follow Us</h5>
                <div className="flex gap-5">
                    <IconLink
                        href="https://www.facebook.com/esperanzaclub1"
                        target="_blank"
                    >
                        <FaFacebook className="size-7" />
                    </IconLink>
                    <IconLink
                        href="https://www.instagram.com/esperanza_club/"
                        target="_blank"
                    >
                        <FaInstagram className="size-7" />
                    </IconLink>
                    <IconLink
                        href="https://www.tiktok.com/@esperanza.club?_t=8kJsEKxlNA6&_r=1"
                        target="_blank"
                    >
                        <FaTiktok className="size-7" />
                    </IconLink>
                    <IconLink
                        href="https://www.linkedin.com/company/esperanza-club/posts/?feedView=all"
                        target="_blank"
                    >
                        <FaLinkedin className="size-7" />
                    </IconLink>
                </div>
            </div>
            <span className="absolute bottom-2 text-xs font-black">
                Esperanza-Club 2023/2024
            </span>
        </main>
    )
}
