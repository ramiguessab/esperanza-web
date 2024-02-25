import React from "react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { SparklesPreview } from "@/components/ui/sparklesPreview"
import { BoxesCore } from "../ui/BackgroundBoxes"
import Image from "next/image"

const words = [
    { text: "Esperanza" },
    { text: "Club" },
    { text: "is" },
    { text: "a" },
    { text: "scientific" },
    { text: "club" },
    { text: "of" },
    { text: "faculty" },
]

export default function Hero() {
    return (
        <div className="max-w-screen-xl mx-auto py-16">
            {/* <BoxesCore /> */}
            <div className=" lg:flex lg:flex-row flex flex-col-reverse items-center md:justify-between  justify-center h-full">
                <div className="">
                    <h1 className=" text-4xl md:text-5xl font-bold">
                        ESPERANZA <span className="text-bluecyan"> CLUB</span>
                    </h1>

                    <TextGenerateEffect
                        words="For Those Who Have Passion"
                        className="text-white text-xl"
                    ></TextGenerateEffect>
                    <TypewriterEffect
                        words={words}
                        className="text-red"
                    ></TypewriterEffect>
                </div>
                <div className="w-68 h-fit sm:w-96">
                    <Image
                        alt="esperanza club logo"
                        src={"/assets/esperanza_logo.png"}
                        height={256 * 2}
                        width={256 * 2}
                        className="animate-rotate"
                    />

                    <SparklesPreview />
                </div>
            </div>
        </div>
    )
}
