import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-green-700">
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
        <div className="flex items-center mb-12">
          {/* Logo */}
          <div className="w-80 h-80 mr-8">
            <img 
              src="/Group_Logo_PNG_1.png" 
              alt="Pay It Forward Tri-State Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Main Content */}
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">The hands & feet of Jesus Christ</h1>
            <p className="text-lg mb-6">501(c)3 EIN: 93-2407035</p>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Mindful assistance for those in need</h2>
                <p>Are you in need of something, but just don't like to ask? Send us a personal message or post anonymously!</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-2">Keeping items out of our landfills</h2>
                <p>Do you have items that you no longer need, but do not want to throw them or haul them away? We accept donations and will pick up when we can!</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-2">Providing mental health awareness & suicide prevention</h2>
                <p>Are you struggling with mental health or thoughts of suicide? Reach out and we will help you with that first step!</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-2">Pay it forward</h2>
                <p>Has someone done something for you and you want to pay it forward? Review our posts and pay forward what you can!</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-2">Join our teams</h2>
                <p>Do you have a service that you would like to share with others? Join one of our teams.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Upcoming Events</h3>
            <div className="text-gray-700">
              <p className="font-semibold">Soup Supper & Pie Auction</p>
              <p>Date and location TBD</p>
            </div>
          </div>
          
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">News</h3>
            <p className="text-gray-700">Past help that we should list especially when it is a philanthropy</p>
          </div>
          
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Make a donation</h3>
            <p className="text-gray-700">Make a donation here or elsewhere</p>
            <Link to="/give" className="text-blue-600 hover:underline">Learn more about giving</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;