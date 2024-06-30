"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdOutlineMailOutline } from "react-icons/md";
import { Textarea } from "../ui/textarea";

import { insert_message } from "@/app/admin/Messages/actions";

const FormSchema = z.object({
  Name: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  Email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  Subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  Message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

async function onSubmit(data: z.infer<typeof FormSchema>, reset: () => void) {
  console.log(data);
  console.log(data.Name);
  console.log(data.Email);
  console.log(data.Subject);
  console.log(data.Message);

  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <p>
          Name: {data.Name}
          <br />
          Email: {data.Email}
          <br />
          Subject: {data.Subject}
          <br />
          Message: {data.Message}
        </p>
      </pre>
    ),
  });

  await insert_message(data.Name, data.Email, data.Subject, data.Message);

  reset(); // Reset the form fields
}

export default function ContactUs() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    },
  });

  return (
    <div className="flex flex-wrap justify-around md:h-[calc(100vh-4rem)] items-center mt-8 md:mt-0">
      <div className="w-full h-full md:w-1/3 px-8 md:px-0 mb-10 md:mb-0 flex flex-col justify-evenly">
        <Accordion type="single" collapsible>
          <p className="text-md sm:text-2xl font-bold my-4">Frequently asked questions</p>
          <AccordionItem value="item-1">
            <AccordionTrigger>How can you join us ?</AccordionTrigger>
            <AccordionContent>
              At the start of each academic year, we hold a recruitment drive where we invite all students to join us. We also have a membership form that you can fill out and submit to us. We will get back to you as soon as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Who can join us ?</AccordionTrigger>
            <AccordionContent>
              We are open to all students in the university. We do not discriminate any student based on his/her major
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Why join us ?</AccordionTrigger>
            <AccordionContent>
              you will learn and develop leadership skills such as decision making, problem solving, delegation and organization. You will of course acquire skills and experiences which will complement your university course, meet new people and live new experiences. And, of course, have fun!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="font-bold flex gap-2 py-6 text-sm xs:text-lg items-center">
          <MdOutlineMailOutline className="size-5 xs:size-8" />
          <a href="mailto:esperanzaclub2019@gmail.com" className="underline underline-offset-2">
            esperanzaclub2019@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/2 w-full px-8 md:px-0 mb-8">
        <div className="w-full lg:w-3/4 p-10 bg-esperanza_very_dark_blue bg-opacity-90 shadow-lg rounded-3xl shadow-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => onSubmit(data, form.reset))}>
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem className="my-4">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="w-full text-base text-white bg-transparent border-esperanza_very_dark_blue border-b-gray-400 border-b-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem className="my-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Email"
                        {...field}
                        className="w-full text-base text-white bg-transparent border-esperanza_very_dark_blue border-b-gray-400 border-b-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Subject"
                render={({ field }) => (
                  <FormItem className="my-4">
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What's the Subject"
                        {...field}
                        className="w-full text-base text-white bg-transparent border-esperanza_very_dark_blue border-b-gray-400 border-b-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Message"
                render={({ field }) => (
                  <FormItem className="my-4">
                    <FormLabel>Message Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What would you like to say?"
                        className="resize-none w-full text-base text-white bg-transparent border-esperanza_very_dark_blue border-b-gray-400 border-b-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="table mx-auto px-5 py-2.5 text-base text-white uppercase transition-all duration-300 ease-in-out bg-transparent border border-white rounded-md hover:bg-esperanza_cyan_blue hover:text-white hover:border-esperanza_cyan_blue"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
