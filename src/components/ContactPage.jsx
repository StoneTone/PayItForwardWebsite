import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-green-100">
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
          <div className="w-64 h-48 bg-white border border-gray-300 flex items-center justify-center text-gray-500">
            Photo, quote, etc.
          </div>
          
          {/* Contact Information */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Contact Us</h1>
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Board Members</h2>
            
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-800">Jessica Hicks, President</p>
                <p className="text-gray-700">Email: Djodhicks15@gmail.com</p>
                <p className="text-gray-700">Ph: 952-240-1316</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800">Vice President: Looking for a Vice President?</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800">Pamela Wendland, Treasurer</p>
                <p className="text-gray-700">Email: Pam.wendland@gmail.com</p>
                <p className="text-gray-700">Ph: 507-360-9100</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800">Donna Voetberg, Secretary</p>
                <p className="text-gray-700">Email: payitforwardtristate@gmail.com</p>
                <p className="text-gray-700">Ph: 507-220-1194</p>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-700 italic">Team Leaders information available under volunteer section.</p>
                <p className="text-gray-700 italic">Arianna Santos will do a page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;