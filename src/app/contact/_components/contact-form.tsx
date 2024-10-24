"use client";

import React from "react";
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const contactFormSchema = z.object({
    firstName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    lastName: z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(3).max(1024)
})

type ContactFormProps = z.infer<typeof contactFormSchema>

const ContactForm = () => {
    const form = useForm<ContactFormProps>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {

        }
    });

    const onSubmit = (values: ContactFormProps) => {
        console.log(values)
    }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-4">

        <div className="grid grid-cols-2 gap-2">
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                            <Input placeholder="John" className="text-base" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Last name <span className="italic">(Optional)</span> </FormLabel>
                        <FormControl>
                            <Input placeholder="Doe" className="text-base" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="johndoe@mailservice.com" type="email" className="text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Message" className="text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
    </>
  )
}

export default ContactForm