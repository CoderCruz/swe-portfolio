import { notFound } from 'next/navigation';
import { allProjects } from '@/lib/projects';
import Image from 'next/image';

export async function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find(p => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div>
        <article className="prose mx-auto px-4 py-12">
        <h1>{project.title}</h1>
        <Image
          src={project.image}
          alt=""
          width={1280}
          height={720}
          className="rounded-xl"
        />
        <p>{project.description}</p>
        <h2>Tech Stack</h2>
        <ul>
          {project.tech.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
