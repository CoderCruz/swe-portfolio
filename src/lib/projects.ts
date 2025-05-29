export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
}

export const allProjects: Project[] = [
  {
    slug: 'next-ai-clothing-finder',
    title: 'AI Clothing Finder',
    description: 'Point your phone at clothing, get shopping links.',
    image: '/testimage.jpeg',
    tech: ['Next.js', 'TypeScript', 'Replicate'],
  },
  {
    slug: 'same',
    title: 'same',
    description: 'Point your phone at clothing, get shopping links.',
    image: '/testimage.jpeg',
    tech: ['Next.js', 'TypeScript', 'Replicate'],
  },
  {
    slug: 'test',
    title: 'test',
    description: 'Point your phone at clothing, get shopping links.',
    image: '/testimage.jpeg',
    tech: ['Next.js', 'TypeScript', 'Replicate'],
  },
  {
    slug: 'test2',
    title: 'test2',
    description: 'Point your phone at clothing, get shopping links.',
    image: '/testimage.jpeg',
    tech: ['Next.js', 'TypeScript', 'Replicate'],
  },

]
