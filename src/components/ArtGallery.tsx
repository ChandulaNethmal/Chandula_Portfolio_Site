'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Brush } from 'lucide-react';
import type { ArtPiece } from '@/lib/art';

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

export function ArtGallery({ photos, drawings }: { photos: ArtPiece[], drawings: ArtPiece[] }) {
  return (
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
  );
}
