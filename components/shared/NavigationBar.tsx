import React from "react"
import Image from "next/image"

export default function NavigationBar() {
    return (
        <div className="w-full h-16 p-1 bg-background2 shadow-2xl shadow-background3 text-white">
            <div className="max-w-screen-xl mx-auto p-4">
                <Image
                    src="/assets/icon_logo.svg"
                    alt="esperanzalogo"
                    width={64}
                    height={64}
                />
            </div>
        </div>
    )
}
