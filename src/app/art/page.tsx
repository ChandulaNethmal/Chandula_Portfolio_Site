'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Brush } from 'lucide-react';
import { type ArtPiece, getArtPieces } from '@/lib/art';
import { useEffect, useState } from 'react';

const GalleryGrid = ({ items }: { items: ArtPiece[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {items.map((item, index) => (
      <Card key={index} className="overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={item.aiHint}
            />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function ArtPage() {
  const [photos, setPhotos] = useState<ArtPiece[]>([]);
  const [drawings, setDrawings] = useState<ArtPiece[]>([]);

  useEffect(() => {
    // Reading from file system can't be done in a client component's initial render.
    // We can fetch it on the client or pass it from a server component parent.
    // For simplicity here, we'll fetch on client mount.
    setPhotos(getArtPieces('photos'));
    setDrawings(getArtPieces('drawings'));
  }, []);

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
          <GalleryGrid items={photos} />
        </TabsContent>
        <TabsContent value="drawings">
          <GalleryGrid items={drawings} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
