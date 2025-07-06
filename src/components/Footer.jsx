import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Organization Info & Image */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 sm:pt-8">
              <div className="w-48 h-20 sm:w-56 sm:h-28 lg:w-72 lg:h-36 flex-shrink-0 rounded-xl overflow-hidden bg-teal-50">
                <img 
                  src="/footerimg.jpg" 
                  alt="Pay It Forward Tri-State" 
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
              <div className="text-center mt-4 sm:mt-6 max-w-xs sm:max-w-sm">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Serving the Tri-State Area since 2023, connecting communities with needed resources and support within a 60-mile radius of Magnolia, MN.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-teal-200 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/our-story" className="text-slate-300 hover:text-teal-200 transition-colors text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-slate-300 hover:text-teal-200 transition-colors text-sm">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="/suicide-prevention" className="text-slate-300 hover:text-teal-200 transition-colors text-sm">
                  Suicide Prevention
                </a>
              </li>
              <li>
                <a href="/donate" className="text-slate-300 hover:text-teal-200 transition-colors text-sm">
                  Donate
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-teal-200 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-200">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-white">Main Contact</p>
                <p className="text-sm text-slate-300">Donna M. Voetberg, President</p>
                <p className="text-sm text-slate-400">payitforwardtristate@gmail.com</p>
                <p className="text-sm text-slate-400">507-220-1194</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-white">Mailing Address</p>
                <p className="text-sm text-slate-300">P.O. Box 33</p>
                <p className="text-sm text-slate-300">Magnolia, MN 56158</p>
              </div>

              <div>
                <a 
                  href="https://www.facebook.com/groups/1247951869444861" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-teal-200 hover:text-teal-100 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 text-center sm:text-left">
              © {new Date().getFullYear()} Pay It Forward Tri-State, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-slate-500">
                Dedicated to the memory of Michael Dale Voetberg
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;