'use server';

/**
 * @fileOverview Generates blog post ideas based on keywords related to embedded systems and user expertise.
 *
 * - generateBlogIdeas - A function that generates blog post ideas.
 * - GenerateBlogIdeasInput - The input type for the generateBlogIdeas function.
 * - GenerateBlogIdeasOutput - The return type for the generateBlogIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogIdeasInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to embedded systems and user expertise.'),
});
export type GenerateBlogIdeasInput = z.infer<typeof GenerateBlogIdeasInputSchema>;

const GenerateBlogIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('Generated blog post ideas.'),
});
export type GenerateBlogIdeasOutput = z.infer<typeof GenerateBlogIdeasOutputSchema>;

export async function generateBlogIdeas(input: GenerateBlogIdeasInput): Promise<GenerateBlogIdeasOutput> {
  return generateBlogIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogIdeasPrompt',
  input: {schema: GenerateBlogIdeasInputSchema},
  output: {schema: GenerateBlogIdeasOutputSchema},
  prompt: `You are a blog post idea generator specializing in embedded systems. Generate 5 blog post ideas based on the following keywords:\n\nKeywords: {{{keywords}}}\n\nBlog Post Ideas:`,
});

const generateBlogIdeasFlow = ai.defineFlow(
  {
    name: 'generateBlogIdeasFlow',
    inputSchema: GenerateBlogIdeasInputSchema,
    outputSchema: GenerateBlogIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
