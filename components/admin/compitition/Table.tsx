import React from "react"
import { ISelectCompitition } from "@/lib/backend/schema/compitition"
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

interface CompititionTableProps {
    participants: ISelectCompitition[]
}

export default function CompititionTable({
    participants,
}: CompititionTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Team Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Member 1</TableHead>
                    <TableHead>Member 2</TableHead>
                    <TableHead>Member 3</TableHead>
                    <TableHead>Member 4</TableHead>
                    <TableHead>Team Level</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {participants.map((participant) => (
                    <TableRow key={participant.id}>
                        <TableCell>{participant.team_name}</TableCell>
                        <TableCell>{participant.email}</TableCell>
                        <TableCell>{participant.member1}</TableCell>
                        <TableCell>{participant.member2}</TableCell>
                        <TableCell>{participant.member3}</TableCell>
                        <TableCell>{participant.member4}</TableCell>
                        <TableCell>{participant.team_level}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
