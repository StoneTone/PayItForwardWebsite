import React, { useState } from 'react';

const OurStoryPage = () => {
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
          
          {/* Our Story Content */}
          <div className="flex-1 text-slate-700">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-teal-700 leading-tight">Our Story</h1>
            
            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-xl shadow-md border-l-4 border-teal-500">
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>We started this group in honor of our son Michael Dale Voetberg. He passed away at 34 years old on March 13, 2019 by suicide. You can read more about our grief journey on our Life without Michael Facebook page.</p>
                
                <p>Michael was not a worldly man. He frequently just gave his possessions away to those in need unless it inspired his love for music. He was a self taught guitarist, drummer and pianist. When he passed he only had a small bag of clothes, one pair of shoes, work boots, and the rest was for playing music.</p>
                
                <p>He loved and cared for people deeply, so we felt the best way to honor him was through Pay it Forward opportunities. On January 11, 2023 we decided to go live with Pay It Forward Tri-State, Inc. by creating a Facebook page where individuals could list items they no longer need.</p>
                
                <p>Our focus is within a 60 mile radius of Magnolia, MN, but we will not turn anyone away.</p>
                
                <p>Beginning the week of October 16, 2024 we officially spent the remainder of Michael's entire inheritance! We feel good about our decision of helping others with the funds and pray that the group will continue to carry on Lord willing.</p>
                
                <p>We recognized the need for donations to keep our 501(c)3 nonprofit going and the need for extra volunteers to make it successful, so we initiated our Fundraising Team, Transportation Team and Donation Management Team.</p>
                
                <p>God brought on board Tina Hyronemus who was willing to open up her heart and her home to those in need in Northwest Iowa. After much prayer and thought, Pay It Forward Tri-State, Inc. 2.0 was started on November 4, 2024. This will allow the group to have a whole different area to pick up & drop off donated items. We are still just amazed at how God is leading this group forward.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;