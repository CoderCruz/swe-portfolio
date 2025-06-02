import Nav from './nav/page.tsx'
import Projects from './projects/page.tsx';
import About from './about/page.tsx'
export default function Home() {
  return (
    <div>
      <Nav />
      <About />
      <Projects />
    </div>
  );
}
