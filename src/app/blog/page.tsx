import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="container py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">Tech & Code</h1>
        <p className="mt-4 text-xl text-muted-foreground">Insights and tutorials from my work in embedded systems.</p>
        <Button asChild className="mt-6" size="lg">
          <Link href="/blog/idea-generator">
            <Lightbulb className="mr-2 h-5 w-5" />
            Generate Blog Ideas
          </Link>
        </Button>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint="programming code"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <CardTitle className="mt-2">{post.title}</CardTitle>
                <CardDescription className="mt-2 flex-grow">{post.excerpt}</CardDescription>
                <div className="mt-4 flex items-center text-primary font-semibold">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
