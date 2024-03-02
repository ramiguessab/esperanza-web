"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const [password, setPassword] = useState("")
    const router = useRouter()
    return (
        <div className="flex flex-col gap-4 justify-center h-screen max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-center">
                Login To Esperanza Admin:{" "}
            </h1>
            <Input
                onChange={(event) => {
                    setPassword(event.currentTarget.value)
                }}
            />
            <Button
                onClick={() => {
                    document.cookie = `password=${password}`
                    router.refresh()
                }}
            >
                Login
            </Button>
        </div>
    )
}
