"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { register_web } from "@/lib/backend/funcs/register_web"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const formSchema = z.object({
    full_name: z.string().min(1, {
        message: "Required",
    }),
    email: z.string().email(),

    academic_year: z.string().min(1, {
        message: "Required",
    }),
    field_of_study: z.string().min(1, {
        message: "Required",
    }),
    interests: z.string().min(1, {
        message: "Required",
    }),
})

export default function Web2Form() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: "",
            email: "",
            academic_year: "",
            field_of_study: "",
            interests: "",
        },
    })

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((values) => {
                    toast.promise(
                        register_web({ ...values, conference: "web2" }),
                        {
                            success:
                                "You have been registred for the Web 2 conference",
                            error: "Error",
                            loading: "We are submiting your registration",
                        }
                    )
                })}
                className="flex flex-col gap-4"
            >
                <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormMessage />
                                </div>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"
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
                    name="email"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Email Address</FormLabel>
                                    <FormMessage />
                                </div>
                                <FormControl>
                                    <Input
                                        placeholder="What's your Email ? "
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
                    name="field_of_study"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Field of Study</FormLabel>
                                    <FormMessage />
                                </div>
                                <FormControl>
                                    <Input
                                        placeholder="AI, SIAD, SI (licence 2 year+)..etc"
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
                    name="academic_year"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Academic Year</FormLabel>
                                    <FormMessage />
                                </div>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="What's your academic year ?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="l1">
                                                Licence 1
                                            </SelectItem>
                                            <SelectItem value="l2">
                                                Licence 2
                                            </SelectItem>
                                            <SelectItem value="l3">
                                                Licence 3
                                            </SelectItem>
                                            <SelectItem value="m1">
                                                Master 1
                                            </SelectItem>
                                            <SelectItem value="m2">
                                                Master 2
                                            </SelectItem>
                                            <SelectItem value="doctorat">
                                                Doctorat
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>
                                        Why this workshop interests you ?
                                    </FormLabel>
                                    <FormMessage />
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

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
