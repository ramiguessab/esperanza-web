import React from "react"
import Image from "next/image"
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
            <h1 className="uppercase text-4xl font-bold">
                Esperanza <span className="text-bluecyan">Club</span>
            </h1>
            <h2 className="text-2xl font-semibold">
                We Live Once,Let&apos;s Leave a Print
            </h2>
            <h3 className="text-xl font-medium">For Those Who Have Passion</h3>
            <RegistrationButton />
        </main>
    )
}
