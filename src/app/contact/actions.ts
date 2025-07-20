'use server';

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>): Promise<{success: boolean; message?: string}> {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just simulate a successful submission.
    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      return { success: false, message: "Invalid form data." };
    }
    
    console.log("Form submitted:", parsed.data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
}
