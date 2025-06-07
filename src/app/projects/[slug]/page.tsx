import { notFound } from 'next/navigation';
import { allProjects } from '@/lib/projects';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params
  console.log(slug)
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) return notFound();
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-12">
      <article className="space-y-8">
        <h1 className="text-3xl font-extrabold text-white">{project.title}</h1>

        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width={1280}
          height={720}
          className="w-full h-auto rounded-lg shadow-md"
        />

        <p className="text-gray-300 text-base leading-relaxed">
          {project.description}
        </p>

        {project.site && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Live Site</h2>
            <Link
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:underline hover:text-blue-200 transition-colors"
            >
              Visit Project
            </Link>
          </div>
        )}

        {project.github && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">GitHub Repo</h2>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-400 hover:underline hover:text-green-200 transition-colors"
            >
              View on GitHub
            </Link>
          </div>
        )}

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Tech Stack</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
