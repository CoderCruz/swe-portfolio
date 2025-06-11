export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  site: string;
  github: string;
}

export const allProjects: Project[] = [
  {
    slug: 'very-possible-game',
    title: 'Very Possible Game',
    description: 'A kids game where you must jump over the monsters coming your way. Jump over the monsters a certain amount of times and you win the game!',
    image: '/verypossiblegame.png',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    site: 'https://very-possible-game.vercel.app',
    github: 'https://github.com/CoderCruz/Very-Possible-Game'
  },
  {
    slug: 'quick-note-cli',
    title: 'QuickNote CLI',
    description: 'A simple, developer-focused command-line note-taking app built with Node.js. Users can clone the repo and run commands like node add --title="..." --body="..." to quickly store notes directly from their terminal — perfect for jotting ideas mid-debug or during code reviews. Built with JavaScript, it uses yargs for intuitive input parsing and chalk for colored output.',
    image: '/quicknotes.png',
    tech: ['JavaScript', 'Node.js'], 
    site: '',
    github: 'https://github.com/CoderCruz/node-note-app/tree/master'
  },
  {
    slug: 'the-book-store',
    title: 'The Book Store',
    description: 'Book Store is a public web app that lets users browse a library of books, add new titles, delete entries, and view individual book details. It features full CRUD functionality and a clean, responsive UI, with separate deployments for the frontend and backend to ensure smooth performance and scalability.',
    image: '/bookstore.png',
    tech: ['JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'React.js', 'Vite', 'CSS', 'HTML', 'Tailwindcss'], 
    site: 'https://book-store-teal-sigma.vercel.app',
    github: 'https://github.com/CoderCruz/book-store'
  },
  {
    slug: 'jose-swe-portfolio',
    title: 'Jose SWE portfolio',
    description: 'My personal portfolio showcases selected projects, technical skills, and professional experience as a fullstack software engineer. It’s designed to highlight my strengths in building scalable web applications, with an emphasis on clean UI, responsive design, and modern development practices.',
    image: '/sweportfolio.png',
    tech: ['JavaScript', 'Node.js', 'Next.js', 'Tailwindcss', 'HTML', 'CSS'], 
    site: 'https://www.cruzcode.app',
    github: 'https://github.com/CoderCruz/swe-portfolio'
  }, 

]
