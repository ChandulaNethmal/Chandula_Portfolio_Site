import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Zap, Feather } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">About Me</h1>
        <p className="mt-4 text-xl text-muted-foreground">Driven by a passion for building the invisible backbone of modern technology.</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 text-center">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Portrait of the engineer"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 border-4 border-primary"
                data-ai-hint="professional portrait"
              />
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-primary">Embedded Systems Engineer</p>
              <p className="mt-2 text-muted-foreground">5+ years of experience in firmware development and hardware design.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                From tinkering with my first Arduino kit in high school to architecting complex real-time systems for industrial applications, my journey has been one of continuous learning and creation. I thrive on the challenge of making hardware and software communicate seamlessly.
              </p>
              <p>
                I hold a Bachelor's degree in Electrical and Computer Engineering and have since worked on a wide array of projects, from consumer electronics to mission-critical automotive systems. Each project has honed my skills and deepened my understanding of what it takes to build reliable and efficient embedded products.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>My Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Cpu className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Performance First</h3>
                  <p className="text-muted-foreground">Writing efficient, optimized code is not just a requirement; it's a craft. I focus on minimizing resource usage while maximizing performance, ensuring systems are responsive and reliable under any load.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Robust by Design</h3>
                  <p className="text-muted-foreground">I believe in building systems that are resilient and fault-tolerant. Thorough testing, defensive programming, and careful architectural planning are core to my process, preventing issues before they arise.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Feather className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Simplicity and Elegance</h3>
                  <p className="text-muted-foreground">Complexity is the enemy of maintainability. I strive to write clean, well-documented code and design straightforward hardware, making systems easier to understand, debug, and extend.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
