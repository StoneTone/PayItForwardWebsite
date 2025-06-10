import React, { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-800 text-white px-4 sm:px-6 py-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg sm:text-xl font-bold tracking-wide hover:text-teal-200 transition-colors">
          Pay It Forward Tri-State, Inc.
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="/our-story" className="hover:text-teal-200 transition-colors">Our Story</a>
          <a href="/volunteer" className="hover:text-teal-200 transition-colors">Volunteer</a>
          <a href="/give" className="hover:text-teal-200 transition-colors">Give</a>
          <a href="/contact" className="hover:text-teal-200 transition-colors">Contact Us</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 hover:bg-slate-700 rounded transition-colors"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-2 space-y-1">
          <a href="/our-story" className="block py-3 px-2 text-white hover:text-teal-200 hover:bg-slate-700 rounded transition-colors">Our Story</a>
          <a href="/volunteer" className="block py-3 px-2 text-white hover:text-teal-200 hover:bg-slate-700 rounded transition-colors">Volunteer</a>
          <a href="/give" className="block py-3 px-2 text-white hover:text-teal-200 hover:bg-slate-700 rounded transition-colors">Give</a>
          <a href="/contact" className="block py-3 px-2 text-white hover:text-teal-200 hover:bg-slate-700 rounded transition-colors">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;