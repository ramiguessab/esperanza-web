
import { ContactUs, ISelectContactUs } from "@/lib/backend/schema/messages"
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
   
  
  interface MessageTableProps{
    Messages : ISelectContactUs[]
   }
   
export default async function MessagesTable({
Messages,
}:MessageTableProps){
    
    return(
        <>
            <Table>
      <TableCaption>A list of all the message has been send.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead className="text-center">Message Content</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Messages.map((Message) => (
          <TableRow key={Message.id}>
            <TableCell className="font-medium">{Message.id}</TableCell>
            <TableCell>{Message.Name}</TableCell>
            <TableCell>{Message.Email}</TableCell>
            <TableCell >{Message.Subject}</TableCell>
            <TableCell >{Message.Message}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    
    </Table>
        </>
    )
}