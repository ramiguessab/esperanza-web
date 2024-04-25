"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import * as Dialog from "@/components/ui/dialog"
import RegistrationTabs from "./Tabs"
import EnvisionForm from "./Forms/Envision"

export default function Registration() {
    return (
        <Dialog.Dialog>
            <Dialog.DialogTrigger asChild>
                <Button
                    size={"lg"}
                    className="overflow-clip relative py-4 font-semibold text-xl before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:z-10 before:via-slate-600/90 before:rotate-45 before:to-transparent before:top-0 before:animate-slide-in-left"
                >
                    Register Now!!!
                </Button>
            </Dialog.DialogTrigger>
            <Dialog.DialogContent>
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>
                        Envision Event Registration Form
                    </Dialog.DialogTitle>
                </Dialog.DialogHeader>
                {/* <RegistrationTabs /> */}
                <EnvisionForm />
            </Dialog.DialogContent>
        </Dialog.Dialog>
    )
}
