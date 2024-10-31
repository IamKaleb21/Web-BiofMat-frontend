import { useState } from 'react'
import biofMatLogo from '/biofmat_logo.webp'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow relative z-10 mx-auto">
      <div className="px-6 py-4 flex justify-between items-center border-1.5 border-primary uppercase text-sm">
        {/* Logo */}
        <a className="flex items-center" href='/'>
          <img src={biofMatLogo} alt="BiofMat Logo" className="h-12"/>
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-primary-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`md:flex md:space-x-8 md:items-center absolute md:static left-0 top-0 md:top-auto w-full md:w-auto bg-white md:bg-transparent transition-transform transform ${
            isOpen ? 'translate-y-16' : '-translate-y-full'
          } md:translate-y-0 duration-300 ease-in-out`}
        >
          <a
            href="/"
            className="block px-4 py-2 text-primary hover:text-primary-700 font-semibold md:inline-block"
          >
            Inicio
          </a>
          <a
            href="/store"
            className="block px-4 py-2 text-primary hover:text-primary-700 font-semibold md:inline-block"
          >
            Tienda
          </a>
          <a
            href="/courses"
            className="block px-4 py-2 text-primary hover:text-primary-700 font-semibold md:inline-block"
          >
            Cursos Virtuales
          </a>
          <a
            href="/blog"
            className="block px-4 py-2 text-primary hover:text-primary-700 font-semibold md:inline-block"
          >
            Blog Educativo
          </a>

          <div className='space-x-4'>
            <a
              href="#Footer"
              className="block px-4 py-2 text-primary hover:text-primary-700 font-semibold md:inline-block"
            >
              Contáctanos
            </a>
            <a
              href="/login"
              className="block px-4 py-2 text-primary hover:text-primary-700 font-semibold md:inline-block"
            >
              Login
            </a>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
