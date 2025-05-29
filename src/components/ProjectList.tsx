import ProjectCard from './ProjectCard';
import { Project } from '@/lib/projects';

export type ProjectListProps = { projects: Project[] };

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(p => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </section>
  );
}
