'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Brush } from 'lucide-react';

const photographyData = [
  { src: 'https://placehold.co/600x400.png', alt: 'A serene lake at dawn', 'data-ai-hint': 'serene lake' },
  { src: 'https://placehold.co/400x600.png', alt: 'A bustling city street at night', 'data-ai-hint': 'city street' },
  { src: 'https://placehold.co/600x400.png', alt: 'A majestic mountain range', 'data-ai-hint': 'mountain range' },
  { src: 'https://placehold.co/600x400.png', alt: 'A close-up of a vibrant flower', 'data-ai-hint': 'vibrant flower' },
  { src: 'https://placehold.co/400x600.png', alt: 'An abstract architectural detail', 'data-ai-hint': 'abstract architecture' },
  { src: 'https://placehold.co/600x400.png', alt: 'A wild animal in its natural habitat', 'data-ai-hint': 'wild animal' },
  { src: 'https://placehold.co/600x400.png', alt: 'A starry night sky', 'data-ai-hint': 'starry sky' },
  { src: 'https://placehold.co/400x600.png', alt: 'A minimalist black and white portrait', 'data-ai-hint': 'minimalist portrait' },
];

const drawingsData = [
  { src: 'https://placehold.co/500x500.png', alt: 'A detailed pencil portrait', 'data-ai-hint': 'pencil portrait' },
  { src: 'https://placehold.co/600x400.png', alt: 'A colorful digital landscape painting', 'data-ai-hint': 'digital landscape' },
  { src: 'https://placehold.co/500x500.png', alt: 'An ink drawing of a mythical creature', 'data-ai-hint': 'ink drawing' },
  { src: 'https://placehold.co/500x500.png', alt: 'A charcoal still life study', 'data-ai-hint': 'charcoal study' },
  { src: 'https://placehold.co/600x400.png', alt: 'A watercolor abstract piece', 'data-ai-hint': 'watercolor abstract' },
  { src: 'https://placehold.co/500x500.png', alt: 'A character concept sketch', 'data-ai-hint': 'character sketch' },
];

const GalleryGrid = ({ items }: { items: typeof photographyData }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {items.map((item, index) => (
      <Card key={index} className="overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={item['data-ai-hint']}
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function ArtPage() {
  return (
    <div className="container py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">My Art Gallery</h1>
        <p className="mt-4 text-xl text-muted-foreground">A creative outlet where I explore visuals and forms.</p>
      </header>

      <Tabs defaultValue="photography" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-8">
          <TabsTrigger value="photography">
            <Camera className="mr-2" />
            Photography
          </TabsTrigger>
          <TabsTrigger value="drawings">
            <Brush className="mr-2" />
            Drawings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="photography">
          <GalleryGrid items={photographyData} />
        </TabsContent>
        <TabsContent value="drawings">
          <GalleryGrid items={drawingsData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
