import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const VolunteerPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 flex-grow">
        <div className="flex flex-col lg:flex-row items-start mb-8 sm:mb-16">
          {/* Volunteer Call-to-Action */}
          <div className="w-full lg:w-80 h-64 lg:h-80 mb-6 sm:mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
            <div className="w-full h-full bg-white rounded-xl shadow-xl flex items-center justify-center border-4 border-teal-200 p-6 text-center">
              <div className="text-slate-700">
                <p className="text-sm sm:text-base mb-4">Do you have a service that you would like to share with others?</p>
                <p className="font-semibold text-teal-700 text-lg">Please reach out to one of our Admins or join one of our existing teams!</p>
              </div>
            </div>
          </div>
          
          {/* Volunteer Information */}
          <div className="flex-1 text-slate-700">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-teal-700 leading-tight">Volunteer</h1>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-teal-700">Transportation</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">The Transportation team is led by Bryan Voetberg. He is in charge of picking up and delivering donations. If you would like to help others by transporting donations this is the group for you.</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-teal-700">Fundraising</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">The Fundraising team is led by Cara Karber. She is extremely knowledgeable in this area and leads this group in finding unique ways to raise money to help those in need. Cara is open to all ideas from those who join her team.</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-teal-700">Donation Organizing</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">The Donation Organizing team is led by Liz Mckee. This team assists with organizing donated items to be listed for free. We encourage people to collect items they need or possibly just like to keep items out of the landfill.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default VolunteerPage;