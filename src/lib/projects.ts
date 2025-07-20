import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  [key: string]: any;
}

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return matterResult.data as Project;
  });

  return allProjectsData;
}
