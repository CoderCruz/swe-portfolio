import Projects from './projects/page';
import About from './about/page'

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-extrabold pt-4 md:text-6xl">Jose Cruz</h1>
      <h2 className="text-center text-xl font-medium md:text-2xl">Full Stack Engineer</h2>
      <About />
      <Projects />
    </div>
  );
}
