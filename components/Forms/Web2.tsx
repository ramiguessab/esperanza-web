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
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
const formSchema = z.object({
    FirstName: z.string().nonempty({
        message:"Required"
    }),
    LastName: z.string().nonempty({
        message:"Required"
    }),
    emailAddress:z.string().email(),
    
    fieldofstudy:z.string().nonempty({
        message:"Required"
    }),
    academicyear:z.string().nonempty({
        message:"Required"
    }),
    interests:z.string().nonempty({
        message:"Required"
    }),
})

export default function Web2() {

const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues : {
        FirstName: "",
        emailAddress:"",
        LastName:"",
        academicyear:"",
        fieldofstudy:"",
        interests:"",
    }
        
})
const handleSubmit = ()=> {

}
    return (
<>
<Form {...form} >
<form onSubmit={form.handleSubmit(handleSubmit)} className=" w-80 xl:w-1/4 pl-4 sm:pl-10 h-fit">
    <label>Registration For the Web 2.0 workshop</label>
    <FormField control={form.control} name="FirstName" render={({field}) => {
        return (<FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
                <Input placeholder=" "{...field} className="text-black"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />
      
      <FormField control={form.control} name="LastName" render={({field}) => {
        return (<FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
            <Input placeholder=""{...field} className="text-black"/>

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


      
      <FormField control={form.control} name="fieldofstudy" render={({field}) => {
        return (<FormItem>
            <FormLabel>Field of Study</FormLabel>
            <FormControl>
                <Input placeholder=""{...field} className="text-black"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />
      <FormField control={form.control} name="academicyear" render={({field}) => {
        return (<FormItem>
            <FormLabel>Academic Year</FormLabel>
            <FormControl>
                <Input placeholder=""{...field} className="text-black"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
     )
      }} />
      <FormField control={form.control} name="interests" render={({field}) => {
        return (<FormItem>
            <FormLabel>Why this workshop interests you ?</FormLabel>
            <FormControl>
                <Input placeholder=""{...field} className="text-black"/>
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