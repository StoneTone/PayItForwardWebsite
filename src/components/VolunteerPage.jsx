import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerPage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
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
          {/* Volunteer Call-to-Action */}
          <div className="w-64 h-48 bg-white border border-gray-300 flex items-center justify-center p-6 text-center">
            <div>
              <p className="text-gray-700 mb-4">Do you have a service that you would like to share with others?</p>
              <p className="font-semibold text-gray-800">Join one of our teams.</p>
            </div>
          </div>
          
          {/* Volunteer Information */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Volunteer</h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Transportation</h2>
                <p className="text-gray-700 mb-1">The Transportation team is led by Lineka L. Nelson. She is in charge of picking up and delivering donations. If you would like to help others by transporting donations this is the group for you.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Fundraising</h2>
                <p className="text-gray-700 mb-1">The Fundraising team is led by Cara Karber. She is extremely knowledgeable in this area and leads this group in finding unique ways to raise money to help those in need. Cara is open to all ideas from those who join her team.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Donation Organizing</h2>
                <p className="text-gray-700 mb-1">The Donation Organizing team is led by Liz Mckee. This team assists with organizing donated items to be listed for free. We encourage people to collect items they need or possibly just like to keep items out of the landfill.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;