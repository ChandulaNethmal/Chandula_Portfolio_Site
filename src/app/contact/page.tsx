'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "./actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await submitContactForm(values);
        if (result.success) {
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            });
            form.reset();
        } else {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: result.message || "There was a problem with your request.",
            });
        }
    }

  return (
    <div className="container py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">Get In Touch</h1>
        <p className="mt-4 text-xl text-muted-foreground">Have a project in mind, a question, or just want to connect? I'd love to hear from you.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-8">Feel free to reach out through any of the platforms below.</p>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-lg">john.doe@circuitflow.com</span>
                </div>
                <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                     <Link href="#" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors">
                        linkedin.com/in/johndoe-embedded
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Github className="h-6 w-6 text-primary" />
                    <Link href="#" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors">
                        github.com/johndoe-embedded
                    </Link>
                </div>
            </div>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                            <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                            <Textarea placeholder="Tell me about your project or question..." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
