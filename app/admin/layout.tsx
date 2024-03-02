import React from "react"
import { cookies } from "next/headers"
import LoginForm from "@/components/admin/LoginForm"

interface AdminLayoutProps {
    children: React.ReactNode
}

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function AdminLayout({ children }: AdminLayoutProps) {
    const passwordCookie = cookies().get("password")

    if (typeof passwordCookie !== "undefined") {
        const password = passwordCookie.value
        if (password === "12ab34cd") return <div>{children}</div>
    }

    return <LoginForm />
}
