import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-black bg-opacity-60 text-white fixed w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a>
            <img src="./rudra-logo.png" alt="Rudra logo" width={100} height={50} />
          </a>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center space-x-4">
          <Link href="#home" scroll={true} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">HOME</a>
          </Link>
          <Link href="#about" scroll={true} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">ABOUT US</a>
          </Link>
          <Link href="#team" scroll={true} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">TEAM</a>
          </Link>
          <Link href="#achievements" scroll={true} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">ACHIEVEMENTS</a>
          </Link>
          <Link href="#gallery" scroll={true} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">GALLERY</a>
          </Link>
          <Link href="#sponsors" scroll={true} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">SPONSORSHIP</a>
          </Link>
          <Link href="#contact" scroll={true} legacyBehavior>
            <a className="hover:text-gray-300 transition duration-200">CONTACT US</a>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button 
          className="lg:hidden flex items-center ml-auto"  
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <button 
            className="absolute top-4 right-4 text-white text-3xl" 
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <div className="flex flex-col items-center mt-16 space-y-6">
            <Link href="#home" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>HOME</a>
            </Link>
            <Link href="#about" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
            </Link>
            <Link href="#team" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>TEAM</a>
            </Link>
            <Link href="#achievements" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>ACHIEVEMENTS</a>
            </Link>
            <Link href="#gallery" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
            </Link>
            <Link href="#sponsors" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>SPONSORSHIP</a>
            </Link>
            <Link href="#contact" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>CONTACT US</a>
            </Link>
          </div>
        </div>

        {/* SRM logo */}
        <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
          <img src="/rudraweb2/srm-logo.png" alt="SRM logo" width={100} height={50} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
