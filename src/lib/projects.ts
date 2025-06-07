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

]
