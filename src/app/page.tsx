import Image from 'next/image';
import Link from 'next/link';
import { projects, skills } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Code, GitBranch, MemoryStick, Rss, Ruler, Terminal, ArrowRight, Lightbulb } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  cpu: Cpu,
  code: Code,
  'git-branch': GitBranch,
  'memory-stick': MemoryStick,
  rss: Rss,
  ruler: Ruler,
  terminal: Terminal,
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-12">
      {/* Hero Section */}
      <section className="container text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          <span className="block">Embedded Systems Engineer</span>
          <span className="block text-primary">Crafting the Future of Technology</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          I design and build robust, efficient, and innovative embedded solutions that bridge the physical and digital worlds.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">My Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A blend of hardware and software skills to bring ideas to life.
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:max-w-none">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div key={skill.name} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  {Icon && <Icon className="h-8 w-8 text-primary" />}
                </div>
                <h3 className="mt-4 text-lg font-medium">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into some of the challenges I've tackled.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint="circuit board technology"
                  />
                </div>
                <CardTitle className="mt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="flex-grow">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="link" className="text-primary">
            <Link href="/projects">
              Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Blog Idea Generator CTA */}
      <section className="container">
        <div className="rounded-lg bg-secondary p-8 text-center">
            <Lightbulb className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl font-headline">Spark Your Next Idea</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Need inspiration for your next blog post? Use my AI-powered tool to generate ideas.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/blog/idea-generator">Try the Idea Generator</Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
