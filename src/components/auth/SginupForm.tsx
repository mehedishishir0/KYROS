"use client"

import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import {
    z
} from "zod"

import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    PasswordInput
} from "@/components/ui/password-input"

const formSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string(),
    createPassword: z.string(),
    confirmPassword: z.string()
});

export default function SginUpForm({ onOpenChange }: { onOpenChange: (open: boolean) => void }) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto ">

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-6">

                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#616161] font-medium text-[16px] mb-2">First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="First Name"
                                            className="border border-[#616161] py-4 focus-visible:border-none"
                                            type=""
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#616161] font-medium text-[16px] mb-2">Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Last Name"
                                            className="border border-[#616161] py-4 focus-visible:border-none"
                                            type="text"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#616161] font-medium text-[16px] mb-2">Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Email Address"
                                    className="border border-[#616161] py-4 focus-visible:border-none"
                                    type="email"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="createPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#616161] font-medium text-[16px] mb-2">Create Password</FormLabel>
                            <FormControl>
                                <PasswordInput
                                    className="border border-[#616161] py-4 focus-visible:border-none"
                                    placeholder="******" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#616161] font-medium text-[16px] mb-2">Confirm Password</FormLabel>
                            <FormControl>
                                <PasswordInput
                                    className="border border-[#616161] py-4 focus-visible:border-none"
                                    placeholder="******" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="bg-[#147575]  hover:bg-[#147575]/90 w-full "
                >
                    Sign up
                </Button>
            </form>
            <p className="text-center mt-16">Don’t have an account? <span
                onClick={() => {
                    onOpenChange(false)
                }}
                className="text-[#147575] font-normal cursor-pointer hover:underline"
            >
                Login
            </span></p>
        </Form>
    )
}