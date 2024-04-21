import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-6 font-extrabold text-4xl">
            Select Admin Pages:
            <Link href={"/admin/web"}>
                <Button
                    variant={"outline"}
                    className="font-extrabold text-4xl p-8"
                >
                    Web
                </Button>
            </Link>
            <Link href={"/admin/compitition"}>
                <Button
                    variant={"outline"}
                    className="font-extrabold text-4xl p-8"
                >
                    Compitition
                </Button>
            </Link>
            <Link href={"/admin/envision"}>
                <Button
                    variant={"outline"}
                    className="font-extrabold text-4xl p-8"
                >
                    Envision
                </Button>
            </Link>
        </div>
    )
}
