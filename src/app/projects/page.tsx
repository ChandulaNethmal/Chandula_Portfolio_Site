import Image from 'next/image';
import { projects } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">My Projects</h1>
        <p className="mt-4 text-xl text-muted-foreground">A showcase of my technical proficiency and passion for problem-solving.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <CardHeader className="p-0">
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint="technology abstract"
                />
                 {project.link && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 bg-background/70 p-2 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ExternalLink className="h-5 w-5" />
                    </Link>
                 )}
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
