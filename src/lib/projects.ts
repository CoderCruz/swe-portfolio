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
    image: '/projects/clothing-finder.jpg',
    tech: ['Next.js', 'TypeScript', 'Replicate'],
  },
]
