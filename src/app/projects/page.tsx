import ProjectList from '@/components/ProjectList';
import { allProjects } from '@/lib/projects';

export const metadata = {
  title: 'Projects | Jose Cruz',
};

export default async function Projects() {
  //TODO: fetch from an API or DB here
  const projects = allProjects;

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}
