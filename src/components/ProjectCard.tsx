import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';

export type ProjectCardProps = { project: Project };

export default function ProjectCard({project}: ProjectCardProps) {
  return (
    <article>
      <Link href={`/projects/${project.slug}`}>
	<Image
	  src={project.image}
	  alt={project.title}
	  width={640}
	  height={360}
	  className='w-full h-48 object-cover rounded-t-xl'
	/>
	<div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
          <ul className="flex flex-wrap gap-2 text-xs">
            {project.tech.map(t => (
              <li key={t} className="bg-gray-900 px-2 py-0.5 rounded">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  )
}
