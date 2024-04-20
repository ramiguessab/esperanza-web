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
                    className="py-4 font-semibold text-xl animate-costume-pulse"
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
