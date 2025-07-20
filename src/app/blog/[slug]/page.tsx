import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1] font-headline">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>

      <div className="relative my-8 h-[300px] md:h-[400px]">
        <Image
          src={post.image}
          alt={`Featured image for ${post.title}`}
          fill
          className="rounded-lg object-cover"
          priority
          data-ai-hint="technology circuit"
        />
      </div>
      
      <div className="mx-auto space-y-6 text-lg text-foreground/80">
        <p className="leading-relaxed">
          This is an introductory paragraph for the blog post titled "{post.title}". Here, we would set the stage for the technical discussion to follow. {post.excerpt}
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          A Deeper Dive into the Subject
        </h2>
        <p className="leading-relaxed">
          In this section, we would explore the technical details. For an embedded systems blog, this could involve discussing microcontroller architecture, real-time operating systems, or specific communication protocols like I2C, SPI, or CAN bus. The goal is to provide valuable, practical information that other engineers can apply to their own work.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground">
          "The essence of engineering is to make complex things simple." - This is a placeholder for a relevant quote.
        </blockquote>
        <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Code Examples and Schematics
        </h3>
        <p className="leading-relaxed">
          No engineering blog post is complete without practical examples. This is where we would include code snippets, logic diagrams, or even snippets of PCB schematics to illustrate key points.
        </p>
        <pre className="mt-2 rounded-md bg-secondary p-4 text-sm font-light font-code overflow-x-auto">
          <code className="text-white">
{`// Placeholder C code for demonstration
#include <stdio.h>

void main() {
    printf("Hello, Embedded World!\\n");
    // In a real post, this would be a meaningful
    // code example related to the article's topic.
    while(1) {
        // Main application loop
    }
}`}
          </code>
        </pre>
        <p className="leading-relaxed">
          Finally, we'd conclude the article by summarizing the key takeaways and perhaps suggesting areas for further research or experimentation. The aim is to leave the reader with a solid understanding of the topic and the confidence to apply their new knowledge.
        </p>
      </div>
    </article>
  );
}
