"use client"
import React from "react"
import { SparklesCore } from "../ui/sparkles"

export function SparklesPreview() {
    return (
        <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="h-24 relative rounded-full sm:w-96 w-80">
                {/* Gradients */}
                <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full blur-sm" />
                <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full" />

                <h1 className="sm:text-2xl text-xl font-bold text-center flex justify-center  text-white absolute z-20">
                    We Live Once,Let&apos;s Leave a Print
                </h1>

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-96 h-full"
                    particleColor="#ffffff"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full  bg-background3 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    )
}
