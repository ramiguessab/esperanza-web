import React from "react"
import Image from "next/image"

export default function NavigationBar() {
    return (
        <div className="w-full p-1 bg-background2 shadow-2xl shadow-background3 text-white">
            <div className="max-w-screen-xl mx-auto">
                <Image
                    src="/assets/esperanza_logo.png"
                    alt="esperanzalogo"
                    width={64}
                    height={64}
                />
            </div>
        </div>
    )
}
