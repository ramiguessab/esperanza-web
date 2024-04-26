"use client"
import * as z from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { register_compititions } from "@/lib/backend/funcs/register_envision"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const formSchema = z.object({
    first_name: z.string().min(1, {
        message: "Required",
    }),
    last_name: z.string().min(1, {
        message: "Required",
    }),
    email: z.string().email().min(1, {
        message: "Required",
    }),
    major: z.string().min(1, {
        message: "Required",
    }),
    reason: z.string().min(20, {
        message: "More Words Please",
    }),
    year_of_study: z.string().min(1, {
        message: "Required",
    }),
    what_startup_means: z.string().min(20, {
        message: "More Words Please",
    }),
    lunch_fees: z.literal<boolean>(true, {
        errorMap: () => ({ message: "You must accept lunch fees" }),
    }),
})

export default function EnvisionForm() {
    const [submited, setSubmited] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            first_name: "",
            last_name: "",
            major: "",
            reason: "",
            what_startup_means: "",
            year_of_study: "",
            lunch_fees: false,
        },
    })

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((values) => {
                    setSubmited(true)
                    toast.promise(
                        register_compititions(values)
                            .then(() => {
                                form.reset()
                            })
                            .catch((err) => {
                                setSubmited(false)
                                throw err
                            }),
                        {
                            success: "You have been registred for Envision",
                            error: "Error",
                            loading: "We are submiting your registration",
                        }
                    )
                })}
                className="flex flex-col gap-4"
            >
                <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>First Name</FormLabel>
                                    <FormMessage className="text-xs" />
                                </div>

                                <FormControl>
                                    <Input placeholder="John" {...field} />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormMessage className="text-xs" />
                                </div>

                                <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Email Address</FormLabel>
                                    <FormMessage className="text-xs" />
                                </div>

                                <FormControl>
                                    <Input
                                        placeholder="john_doe@email.com"
                                        {...field}
                                        type="email"
                                        className=""
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="major"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Major</FormLabel>
                                    <FormMessage className="text-xs" />
                                </div>

                                <FormControl>
                                    <Input
                                        placeholder="CS, Architecture, Management..."
                                        {...field}
                                        className=""
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="year_of_study"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Year of study?</FormLabel>
                                    <FormMessage className="text-xs" />
                                </div>

                                <FormControl>
                                    <Input placeholder="License 3" {...field} />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>
                                        Why are you interested to come?
                                    </FormLabel>
                                    <FormMessage className="text-xs" />
                                </div>

                                <FormControl>
                                    <Textarea
                                        {...field}
                                        className="resize-none"
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="what_startup_means"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>
                                        Define startup with your style?
                                    </FormLabel>
                                    <FormMessage className="text-xs" />
                                </div>

                                <FormControl>
                                    <Textarea
                                        {...field}
                                        className="resize-none"
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="lunch_fees"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Lunch Fees</FormLabel>
                                    <FormMessage className="text-xs" />
                                </div>
                                <div className="flex flex-row items-center gap-2 ">
                                    <FormControl>
                                        <Checkbox
                                            id="lunch fee"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel
                                        htmlFor="lunch fee"
                                        className="font-bold text-sm"
                                    >
                                        Check to accept small lunch fee (200DZA)
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )
                    }}
                />

                <Button type="submit" disabled={submited}>
                    Submit
                </Button>
            </form>
        </Form>
    )
}
