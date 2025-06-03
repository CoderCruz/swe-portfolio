import Image from 'next/image';

export default function About() {
  return (     
    <section className="w-full max-w-5xl mx-auto px-4 pt-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Image 
          src="/headshot.jpg"
          alt="Image of Jose Cruz"
          width={300}
          height={300}
          className="rounded-xl object-cover md:w-1/2 h-auto"
        />
        <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-white">About Me</h2>
          <p className="text-gray-300 text-base mt-4 leading-relaxed">
            I'm a full-stack software engineer with 7 years of experience building scalable, user-focused applications. At JPMorgan Chase, I contributed to the Wealth Management team, developing and testing features on chase.com. I also mentored aspiring developers at Per Scholas, guiding them through React, Node.js, and full-stack fundamentals. I take pride in writing clean, maintainable code, collaborating across teams, and continuously deepening my understanding of data structures, algorithms, and software architecture to build performant, impactful solutions.
          </p>
        </div>
      </div>
    </section> 
  )
}

