import React from "react"
import { ISelectEnvision } from "@/lib/backend/schema/envision"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface EnvisionTableProps {
    participants: ISelectEnvision[]
}

export default function EnvisionTable({ participants }: EnvisionTableProps) {
    return (
        <Table>
            <TableHeader className="stickey top-0">
                <TableRow>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Major</TableHead>
                    <TableHead>Year Of Study</TableHead>
                    <TableHead>What Startup Means</TableHead>
                    <TableHead>Accepted</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {participants.map((participant) => (
                    <TableRow key={participant.id}>
                        <TableCell>{participant.first_name}</TableCell>
                        <TableCell>{participant.last_name}</TableCell>
                        <TableCell>{participant.email}</TableCell>
                        <TableCell>{participant.reason}</TableCell>
                        <TableCell>{participant.major}</TableCell>
                        <TableCell>{participant.year_of_study}</TableCell>
                        <TableCell>{participant.what_startup_means}</TableCell>
                        <TableCell>
                            {participant.accepted ? "accepted" : "refused"}
                        </TableCell>
                        <TableCell>
                            <Button variant={"secondary"}>Accept</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
