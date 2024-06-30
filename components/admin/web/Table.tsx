import React from "react"
import { ISelectWeb } from "@/lib/backend/schema/web"
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

interface WebTableProps {
    participants: ISelectWeb[]
}

export default function WebTable({ participants }: WebTableProps) {
    return (
        <Table>
            <TableHeader className="sticky top-0 bg-slate-50 w-screen">
                <TableRow>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Academic Year</TableHead>
                    <TableHead>Field of Study</TableHead>
                    <TableHead>Interests</TableHead>
                    <TableHead>Conference</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {participants.map((participant) => (
                    <TableRow key={participant.id}>
                        <TableCell>{participant.full_name}</TableCell>
                        <TableCell>{participant.email}</TableCell>
                        <TableCell>{participant.academic_year}</TableCell>
                        <TableCell>{participant.field_of_study}</TableCell>
                        <TableCell>{participant.interests}</TableCell>
                        <TableCell>
                            {participant.conference === "web2"
                                ? "Web 2"
                                : "Web 3"}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
