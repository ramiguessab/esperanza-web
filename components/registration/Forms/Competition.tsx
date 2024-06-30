"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { register_compititions } from "@/lib/backend/funcs/register_compitition"
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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const formSchema = z.object({
    team_name: z.string().min(4, {
        message: "Should be >=4",
    }),
    email: z.string().email(),

    member1: z.string().min(1, {
        message: "Required",
    }),
    member2: z.string().min(1, {
        message: "Required",
    }),
    member3: z.string().min(1, {
        message: "Required",
    }),
    member4: z.string(),
    team_level: z.string().min(1, {
        message: "Required",
    }),
})

export default function CompetitionForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            team_name: "",
            email: "",
            member1: "",
            member2: "",
            member3: "",
            member4: "",
            team_level: "",
        },
    })
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((values) => {
                    toast.promise(
                        register_compititions(values).then(() => {
                            form.reset()
                        }),
                        {
                            success:
                                "You have been registred for the competition",
                            error: "Error",
                            loading: "We are submiting your registration",
                        }
                    )
                })}
                className="flex flex-col gap-4"
            >
                <FormField
                    control={form.control}
                    name="team_name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Team Name</FormLabel>
                                    <FormMessage />
                                </div>

                                <FormControl>
                                    <Input
                                        placeholder="What's your team name ? "
                                        {...field}
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
                    name="member1"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Member N°1</FormLabel>
                                    <FormMessage />
                                </div>

                                <FormControl>
                                    <Input
                                        placeholder="Member N°1 Full Name"
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
                    name="member2"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Member N°2</FormLabel>
                                    <FormMessage />
                                </div>

                                <FormControl>
                                    <Input
                                        placeholder="Member N°2 Full Name"
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
                    name="member3"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Member N°3</FormLabel>
                                    <FormMessage />
                                </div>

                                <FormControl>
                                    <Input
                                        placeholder="Member N°3 Full Name"
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
                    name="member4"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Member N°4 (optional)</FormLabel>
                                    <FormMessage />
                                </div>

                                <FormControl>
                                    <Input
                                        placeholder="Member N°4 Full Name"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="team_level"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <div className="flex flex-row justify-between">
                                    <FormLabel>Team Level</FormLabel>
                                    <FormMessage />
                                </div>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="What's your team level ?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Beginner">
                                                Beginner
                                            </SelectItem>
                                            <SelectItem value="Intermediate">
                                                Intermediate
                                            </SelectItem>
                                            <SelectItem value="Advanced">
                                                Advanced
                                            </SelectItem>
                                            <SelectItem value="Guru">
                                                Guru
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
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
