import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const ContactPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 flex-grow">
        <div className="flex flex-col lg:flex-row items-start mb-8 sm:mb-16">
          {/* Contact Image */}
          <div className="w-full lg:w-80 h-64 lg:h-80 mb-6 sm:mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
            <img 
              src="/supported_hands.jpg" 
              alt="Supported hands representing community support" 
              className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-teal-200"
            />
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
                <p className="font-semibold text-teal-700 text-lg sm:text-xl mb-1">Cara Karber, Vice President</p>
                <p className="text-sm sm:text-base text-slate-600">Email: carakarber2455@gmail.com</p>
                <p className="text-sm sm:text-base text-slate-600">Ph: 605-951-5666</p>
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
                <p className="font-semibold text-teal-700 text-lg sm:text-xl mb-1">Bryan Voetberg, Transportation Director</p>
                <p className="text-sm sm:text-base text-slate-600">Email: payitforwardtristate@gmail.com</p>
                <p className="text-sm sm:text-base text-slate-600">Ph: 507-290-4328</p>
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
      
      <Footer />
    </div>
  );
};

export default ContactPage;