import { getPostData, getAllPostSlugs } from '@/lib/posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar } from 'lucide-react';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map(p => p.params);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

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
      
      <div
        className="prose prose-invert mx-auto max-w-none text-lg text-foreground/80 space-y-6"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
      />
    </article>
  );
}
