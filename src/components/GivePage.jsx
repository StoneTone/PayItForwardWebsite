import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const GivePage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 flex-grow">
        <div className="flex flex-col lg:flex-row items-start mb-8 sm:mb-16">
          {/* Donation Image */}
          <div className="w-full lg:w-80 h-64 lg:h-80 mb-6 sm:mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
            <div className="w-full h-full bg-white rounded-xl shadow-xl flex items-center justify-center border-4 border-teal-200 overflow-hidden">
              <img 
                src="/donate.jpg" 
                alt="Venmo QR Code" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Give Content */}
          <div className="flex-1 text-slate-700">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-teal-700 leading-tight">Give</h1>
            
            <div className="space-y-4 sm:space-y-6 mb-8">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Do you have items that you no longer need, but do not want to throw them or haul them away? We accept donations and will pick up your stuff! Message us on Facebook if this page!).</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <p className="font-semibold text-teal-700 text-lg sm:text-xl mb-2">Monetary donations:</p>
              </div>
            </div>
            
            <div className="bg-teal-600 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="mb-6">
                <p className="text-lg sm:text-xl text-teal-100 mb-2">Checks can be mailed to:</p>
                <p className="font-bold text-xl sm:text-2xl mb-4">Pay It Forward Tri-State, Inc.</p>
                <p className="font-bold text-xl sm:text-2xl mb-4">P.O. Box 33 Magnolia, MN 56158</p>
                <div className="bg-teal-700 text-white px-4 py-3 rounded-lg inline-block mb-4">
                  <p className="text-base sm:text-lg font-medium">501(c)3 EIN: 93-2407035</p>
                </div>
              </div>
              
              <div className="border-t border-teal-500 pt-4">
                <h3 className="font-semibold text-lg sm:text-xl mb-3 text-white">Additional Information:</h3>
                <p className="text-base sm:text-lg text-teal-100 leading-relaxed">
                  Please specify if you would like your gift to go towards a certain area, such as <span className="font-medium text-white">food</span> or <span className="font-medium text-white">dental care</span>, on your check or Venmo transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GivePage;