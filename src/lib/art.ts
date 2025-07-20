import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ArtPiece {
  image: string;
  alt: string;
  aiHint: string;
  [key: string]: any;
}

export function getArtPieces(type: 'photos' | 'drawings'): ArtPiece[] {
  const artDirectory = path.join(contentDirectory, type);
  
  // Check if directory exists
  if (!fs.existsSync(artDirectory)) {
    console.warn(`Directory not found: ${artDirectory}`);
    return [];
  }
  
  const fileNames = fs.readdirSync(artDirectory);
  const allArtData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(artDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return matterResult.data as ArtPiece;
    });

  return allArtData;
}
