"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/backend/client_supabase"
import { toast } from "sonner"
import * as z from "zod"
import { useForm } from "react-hook-form"
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
import { twMerge } from "tailwind-merge"

const formSchema = z.object({ message: z.string().min(1, "Required") })

export default function SendMessageButton() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    })
    return (
        <Form {...form}>
            <form
                className="flex flex-row gap-4"
                onSubmit={form.handleSubmit(({ message }) => {
                    toast.promise(
                        supabase
                            .channel("messages", {
                                config: { broadcast: { self: true } },
                            })
                            .send({
                                event: "message_sent",
                                type: "broadcast",
                                payload: { data: message },
                            })
                            .then((res) => {
                                if (res === "ok") {
                                    form.reset()
                                }
                            }),
                        {
                            success: "Message Sent",
                            error: "Error",
                            loading: "Sending",
                        }
                    )
                })}
            >
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        placeholder="..."
                                        {...field}
                                        className={twMerge(
                                            form.formState.errors.message
                                                ? "border-red-800 border-2"
                                                : ""
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />
                <Button onClick={() => {}}>Send</Button>
            </form>
        </Form>
    )
}
