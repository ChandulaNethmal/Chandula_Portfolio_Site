'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateBlogIdeas } from '@/ai/flows/generate-blog-ideas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  keywords: z.string().min(3, { message: 'Please enter at least 3 characters.' }),
});

export default function IdeaGeneratorPage() {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setIdeas([]);
    try {
      const result = await generateBlogIdeas({ keywords: values.keywords });
      if (result && result.ideas) {
        setIdeas(result.ideas);
      } else {
        setError('Failed to generate ideas. The response was empty.');
      }
    } catch (e) {
      setError('An error occurred while generating ideas. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container py-12 max-w-2xl">
      <header className="text-center mb-12">
        <Wand2 className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">Blog Idea Generator</h1>
        <p className="mt-4 text-xl text-muted-foreground">Unleash your creativity. Enter some keywords and let AI spark your next great blog post.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Generate Ideas</CardTitle>
          <CardDescription>Enter topics like "RTOS scheduling", "low-power design", or "STM32 vs ESP32".</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., real-time linux, CAN bus security" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {error && (
        <div className="mt-8 text-center text-destructive">
          <p>{error}</p>
        </div>
      )}

      {ideas.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-6">Generated Ideas</h2>
          <div className="space-y-4">
            {ideas.map((idea, index) => (
              <Card key={index} className="bg-secondary">
                <CardContent className="p-4 flex items-start gap-4">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="flex-1">{idea}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
