'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mitchell Lamper - Machine Learning Engineer
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Projects
            </a>
            {/* <a href="#blog" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
              Blog
            </a> */}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button - you can expand this later */}
          <button className="md:hidden text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
