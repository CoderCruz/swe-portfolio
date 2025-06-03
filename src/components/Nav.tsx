import Link from 'next/link';

export default function Nav() {
  return(
    <nav className="w-full px-4 py-3 md:px-8 md:py-4 bg-transparent">
      <Link
        href="/"
        className="text-2xl md:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white hover:from-gray-900 hover:to-white transition-all duration-500"
      >
        CRUZCODE
      </Link>
    </nav>
  )
}
