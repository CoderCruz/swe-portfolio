import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Nav() {
  return(
    <nav className="w-full flex justify-between px-4 py-3 md:px-8 md:py-4 bg-transparent">
      <Link
        href="/"
        className="text-2xl md:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white hover:from-gray-900 hover:to-white transition-all duration-500"
      >
        CRUZCODE
      </Link>

      <div className="flex gap-2 items-center text-xl md:text-3xl ">
        <Link 
          href="mailto:cruzjosework@gmail.com"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-800 transition-colors duration-300"
        > 
          <FaEnvelope />
        </Link>
        <Link 
          href="https://github.com/CoderCruz" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-800 transition-colors duration-300"
        >
          <FaGithub />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/josecruzsoftware/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-800 transition-colors duration-300"
        >
          <FaLinkedin />
        </Link>
      </div>
    </nav>
  )
}
