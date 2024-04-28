"use client"
import { useState } from "react"
import { ISelectEnvision } from "@/lib/backend/schema/envision"
import { Button } from "@/components/ui/button"
import { ImStatsBars, ImCross } from "react-icons/im"

interface StatsProps {
    participants: {
        [id: string]: ISelectEnvision
    }
}

export default function Stats({ participants }: StatsProps) {
    const [opened, setOpened] = useState(false)
    const liveParticipantsValues = Object.values(participants)

    if (!opened) {
        return (
            <Button
                variant={"default"}
                size={"icon"}
                onClick={() => {
                    setOpened(true)
                }}
                className="absolute bottom-4 left-2 p-6"
            >
                <div className="">
                    <ImStatsBars size={32} />
                </div>
            </Button>
        )
    }

    return (
        <div className="bg-slate-900 text-slate-50 flex flex-row gap-4 items-center absolute bottom-2 left-1/2 -translate-x-1/2 border p-4 z-50 rounded-md">
            <div className="flex flex-col">
                <span>
                    Total:{" "}
                    <span className="font-bold">
                        {liveParticipantsValues.length}
                    </span>
                </span>
                <span>
                    Accepted:{" "}
                    <span className="font-bold">
                        {
                            liveParticipantsValues.filter(
                                (participants) => participants.accepted
                            ).length
                        }
                    </span>
                </span>
            </div>
            <Button
                variant={"destructive"}
                size={"sm"}
                onClick={() => {
                    setOpened(false)
                }}
            >
                <ImCross size={8} />
            </Button>
        </div>
    )
}
