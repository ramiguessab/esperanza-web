import React from "react"
import Hero from "@/components/landing/Hero"
import Competition from "@/components/Forms/Competition"
import Web2 from "@/components/Forms/Web2"
import Web3 from "@/components/Forms/Web3"

export default function Home() {
    return (
        <main className="bg-background3 min-h-screen text-white">
            <Hero />
            <div className="">
                <Competition/>
            <Web2></Web2>
            <Web3></Web3>
            </div>
            
        </main>
    )
}
