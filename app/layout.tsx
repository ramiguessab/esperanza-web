import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"
import { Inter, Roboto } from "next/font/google"
import CSPostHogProvider from "@/components/Posthog"
import Header from "@/components/interface/Header"
import Footer from "@/components/interface/Footer"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Esperanza Club",
    description: "This is the official website of the club",
    icons: ["/assets/icon_logo.svg"],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>)

 {
    return (
        <html lang="en">
            <CSPostHogProvider>
                <body
                    className={`${inter.className} bg-esperanza_dark_blue min-h-screen text-white`}
                >
                    <Header />
                    <Toaster />
                    {children}
                    <Footer />
                </body>
            </CSPostHogProvider>
        </html>
    )
}
