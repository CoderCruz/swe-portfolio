import Image from 'next/image';

export default function About() {
  return (     
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
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
            I'm a full-stack software engineer with 7 years of experience building scalable, user-focused applications. I previously worked at JPMorgan Chase on the Wealth Management team, where I built and tested features on chase.com. I also mentor aspiring developers at Per Scholas, helping them learn React, Node.js, and full-stack fundamentals. I enjoy building clean, maintainable code, collaborating across teams, and shipping products that make an impact.
          </p>
        </div>
      </div>
    </section> 
  )
}

