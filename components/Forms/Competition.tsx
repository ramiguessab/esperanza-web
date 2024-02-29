"use client"
import * as z from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"  
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
const formSchema = z.object({
    TeamName: z.string().min(4,{
        message : "Team Name should be at least 3 characters."
    }),
    emailAddress:z.string().email(),
    firstMember: z.string().nonempty({
        message:"Required"
    }),
    secondMember: z.string().nonempty({
        message:"Required"
    }),
    thirdMember: z.string().nonempty({
        message:"Required"
    }),
    fourthMember: z.string().nonempty({
        message:"Required"
    }),
    level:z.string().nonempty({
        message:"Required"
    }),
})

export default function Competition() {

const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues : {
        TeamName: "",
        emailAddress:"",
        firstMember:"",
        secondMember:"",
        thirdMember:"",
        fourthMember:"",
    }
        
})
const handleSubmit = ()=> {

}
    return (
<>
<Form {...form} >
<form onSubmit={form.handleSubmit(handleSubmit)} className=" w-80 xl:w-1/4 pl-4 sm:pl-10 h-fit">
    <label>Registration For the Competition</label>
    <FormField control={form.control} name="TeamName" render={({field}) => {
        return (<FormItem>
            <FormLabel>Team Name</FormLabel>
            <FormControl>
                <Input placeholder="What's your team name ? "{...field} className="text-black"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />

<FormField control={form.control} name="emailAddress"  render={({field}) => {
        return (<FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
                <Input placeholder="What's your Email ? "{...field} type="email" className="text-black"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />


      <FormField control={form.control} name="firstMember" render={({field}) => {
        return (<FormItem>
            <FormLabel>Member N°1</FormLabel>
            <FormControl>
            <Input placeholder="Member N°1 Full Name"{...field} className="text-black"/>

            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />
      <FormField control={form.control} name="secondMember" render={({field}) => {
        return (<FormItem>
            <FormLabel>Member N°2</FormLabel>
            <FormControl>
                <Input placeholder="Member N°2 Full Name"{...field} className="text-black"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />
      <FormField control={form.control} name="thirdMember" render={({field}) => {
        return (<FormItem>
            <FormLabel>Member N°3</FormLabel>
            <FormControl>
                <Input placeholder="Member N°3 Full Name"{...field} className="text-black"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />
      <FormField control={form.control} name="fourthMember" render={({field}) => {
        return (<FormItem>
            <FormLabel>Member N°4</FormLabel>
            <FormControl>
                <Input placeholder="Member N°4 Full Name"{...field} className="text-black"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />

<FormField control={form.control} name="level" render={({field}) => {
        return (<FormItem>
            <FormLabel>Team Name</FormLabel>
            <FormControl>
            <Select>
  <SelectTrigger className="text-black cursor-pointer">
    <SelectValue placeholder="What's your team level ?" />
  </SelectTrigger>
  <SelectContent className="">
    <SelectItem value="Beginner">Beginner</SelectItem>
    <SelectItem value="Intermediate ">Intermediate </SelectItem>
    <SelectItem value="Advanced ">Advanced </SelectItem>
    <SelectItem value="Guru ">Guru </SelectItem>
  </SelectContent>
</Select>

            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />

      <Button type="submit" className=" bg-white text-background2 mt-5 w-full">Submit</Button>
</form>
</Form>
</>

    )}