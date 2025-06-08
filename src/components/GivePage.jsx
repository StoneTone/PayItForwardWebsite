import React from 'react';
import { Link } from 'react-router-dom';

const GivePage = () => {
  return (
    <div className="min-h-screen bg-blue-200">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-3">
        <div className="flex space-x-8">
          <Link to="/" className="hover:text-gray-300">Pay It Forward Tri-State, Inc.</Link>
          <Link to="/our-story" className="hover:text-gray-300">Our Story</Link>
          <Link to="/volunteer" className="hover:text-gray-300">Volunteer</Link>
          <Link to="/give" className="hover:text-gray-300">Give</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="flex items-start space-x-8">
          {/* Placeholder Image */}
          <div className="w-80 h-80 bg-white border border-gray-300 flex items-center justify-center text-gray-500">
          <img 
              src="/donate.jpg" 
              alt="Venmo QR Code" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Give Content */}
          <div className="flex-1 text-white">
            <h1 className="text-3xl font-bold mb-6">Give</h1>
            
            <div className="space-y-4 mb-8">
              <p>Do you have items that you no longer need, but do not want to throw them or haul them away? We accept donations and will pick up your stuff! Message us on Facebook if this page!).</p>
              
              <p className="font-semibold">Monetary donations:</p>
            </div>
            
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <p className="font-semibold mb-2">Pay It Forward Tri-State, Inc.</p>
              <p className="mb-2">501(c)3 EIN: 93-2407035</p>
              <p>Make a donation here or elsewhere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivePage;