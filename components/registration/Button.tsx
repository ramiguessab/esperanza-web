"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import * as Dialog from "@/components/ui/dialog"
import RegistrationTabs from "./Tabs"

export default function Registration() {
    return (
        <Dialog.Dialog>
            <Dialog.DialogTrigger asChild>
                <Button size={"lg"}> Register for the event</Button>
            </Dialog.DialogTrigger>
            <Dialog.DialogContent>
                <Dialog.DialogHeader>
                    <Dialog.DialogTitle>
                        Esperanza Event Registration Form
                    </Dialog.DialogTitle>
                </Dialog.DialogHeader>
                <RegistrationTabs />
            </Dialog.DialogContent>
        </Dialog.Dialog>
    )
}
