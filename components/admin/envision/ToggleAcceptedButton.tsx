"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { ISelectEnvision } from "@/lib/backend/schema/envision"
import { toggle_accepted } from "@/actions/toggle_accepted"
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io"
import { toast } from "sonner"

interface ToggleAcceptedButtonProps {
    participant: ISelectEnvision
}

export default function ToggleAcceptedButton({
    participant,
}: ToggleAcceptedButtonProps) {
    const { accepted, first_name, last_name } = participant
    return (
        <Button
            variant={accepted ? "destructive" : "default"}
            onClick={() => {
                toast.promise(toggle_accepted(participant), {
                    success: (
                        <>
                            {accepted ? (
                                <IoIosCloseCircle size={24} />
                            ) : (
                                <IoIosCheckmarkCircle size={24} />
                            )}
                            {first_name} {last_name}{" "}
                            {accepted ? "got refused" : "got accepted"}
                        </>
                    ),
                    error: "Error",
                    loading: "We are working",
                    className: "capitalize",
                })
            }}
        >
            {participant.accepted ? "Refuse" : "Accept"}
        </Button>
    )
}
