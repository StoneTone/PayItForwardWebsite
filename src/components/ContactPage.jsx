import React, { useState } from 'react';

const ContactPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50">
      {/* Navigation */}
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

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col lg:flex-row items-start mb-8 sm:mb-16">
          {/* Placeholder Image */}
          <div className="w-full lg:w-80 h-64 lg:h-80 mb-6 sm:mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
            <div className="w-full h-full bg-white rounded-xl shadow-xl flex items-center justify-center border-4 border-teal-200 text-slate-500">
              Photo, quote, etc.
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="flex-1 text-slate-700">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2 sm:mb-4 text-teal-700 leading-tight">Contact Us</h1>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-teal-600">Board Members</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <p className="font-semibold text-teal-700 text-lg sm:text-xl mb-1">Donna M. Voetberg, President</p>
                <p className="text-sm sm:text-base text-slate-600">Email: payitforwardtristate@gmail.com</p>
                <p className="text-sm sm:text-base text-slate-600">Ph: 507-220-1194</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <p className="font-semibold text-teal-700 text-lg sm:text-xl">Vice President: Looking for a Vice President</p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <p className="font-semibold text-teal-700 text-lg sm:text-xl mb-1">Tina Hyronemus, Admin NW Iowa</p>
                <p className="text-sm sm:text-base text-slate-600">Email: thyronemus@yahoo.com</p>
                <p className="text-sm sm:text-base text-slate-600">Ph: 712-470-3479</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <p className="font-semibold text-teal-700 text-lg sm:text-xl mb-1">Pamela Wendland, Treasurer</p>
                <p className="text-sm sm:text-base text-slate-600">Email: Pam.wendland@gmail.com</p>
                <p className="text-sm sm:text-base text-slate-600">Ph: 507-360-9100</p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <p className="font-semibold text-teal-700 text-lg sm:text-xl mb-1">Cara Karber, Fundraising Director</p>
                <p className="text-sm sm:text-base text-slate-600">Email: carakarber2455@gmail.com</p>
                <p className="text-sm sm:text-base text-slate-600">Ph: 605-951-5666</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <p className="font-semibold text-teal-700 text-lg sm:text-xl mb-1">Angel Hiykel, Secretary Interim</p>
                <p className="text-sm sm:text-base text-slate-600">Email: angelhiykel16@gmail.com</p>
                <p className="text-sm sm:text-base text-slate-600">Ph: 712-830-3288</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;