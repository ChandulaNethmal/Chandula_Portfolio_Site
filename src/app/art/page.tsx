import { getArtPieces } from '@/lib/art';
import { ArtGallery } from '@/components/ArtGallery';

export default function ArtPage() {
  const photos = getArtPieces('photos');
  const drawings = getArtPieces('drawings');

  return (
    <div className="container py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">My Art Gallery</h1>
        <p className="mt-4 text-xl text-muted-foreground">A creative outlet where I explore visuals and forms.</p>
      </header>
      <ArtGallery photos={photos} drawings={drawings} />
    </div>
  );
}
