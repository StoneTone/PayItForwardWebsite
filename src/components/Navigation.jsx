import React, { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-teal-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:payitforwardtristate@gmail.com" className="flex items-center hover:text-teal-200 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="hidden sm:inline">payitforwardtristate@gmail.com</span>
              <span className="sm:hidden">Contact Us</span>
            </a>
            <span className="hidden sm:flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Magnolia, MN | 60-mile service area
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/groups/1247951869444861" target="_blank" rel="noopener noreferrer" className="hover:text-teal-200 transition-colors" aria-label="Facebook Group">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <span className="text-teal-200">|</span>
            <span className="font-medium">Crisis Helpline: 988</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-teal-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <a href="/" className="text-slate-800 hover:text-teal-600 transition-colors">
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.5 4.5c-0.7-0.4-1.5-0.7-2.4-0.9C14.4 3.4 13.3 3.3 12 3.3c-1.1 0-2.1 0.1-3.0 0.3
                          c-0.9 0.2-1.7 0.5-2.4 0.9C5.4 5.2 4.8 6.3 4.8 7.8c0 1.5 1.1 4.8 2.6 7.7
                          c1.0 2.0 3.1 5.5 5.0 5.5c1.9 0 3.9-3.4 5.0-5.5c1.5-2.9 2.6-6.2 2.6-7.7
                          C20 6.3 19.4 5.2 17.5 4.5z" />
                    </svg>
                  </div>
                  <div>
                      <div className="text-xl font-bold tracking-tight">Pay It Forward</div>
                      <div className="text-sm text-slate-600 font-medium">Tri-State, Inc.</div>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/our-story" className="text-slate-700 hover:text-teal-600 font-medium transition-colors relative group">
                Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/volunteer" className="text-slate-700 hover:text-teal-600 font-medium transition-colors relative group">
                Get Involved
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/suicide-prevention" className="text-slate-700 hover:text-teal-600 font-medium transition-colors relative group">
                Suicide Prevention
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/contact" className="text-slate-700 hover:text-teal-600 font-medium transition-colors relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="/donate" 
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Donate Now
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-slate-600 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-600 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-600 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-slate-200 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 py-6 space-y-4">
            <a href="/our-story" className="block py-3 px-4 text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium">
              Our Story
            </a>
            <a href="/volunteer" className="block py-3 px-4 text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium">
              Get Involved
            </a>
            <a href="/suicide-prevention" className="block py-3 px-4 text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium">
              Suicide Prevention
            </a>
            <a href="/contact" className="block py-3 px-4 text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium">
              Contact Us
            </a>
            <div className="pt-4 border-t border-slate-200">
              <a 
                href="/donate" 
                className="block w-full text-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;