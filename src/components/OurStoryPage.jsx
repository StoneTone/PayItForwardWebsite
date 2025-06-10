import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const OurStoryPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 flex-grow">
        <div className="flex flex-col lg:flex-row items-start mb-8 sm:mb-16">
          {/* Michael's Photo */}
          <div className="w-full lg:w-80 h-64 lg:h-80 mb-6 sm:mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
            <div className="w-full h-full bg-white rounded-xl shadow-xl flex items-center justify-center overflow-hidden p-4">
              <img 
                src="/michael-ourstory.jpg" 
                alt="Michael Dale Voetberg" 
                className="w-full h-full object-contain border-4 border-teal-200 rounded-lg"
              />
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
      
      <Footer />
    </div>
  );
};

export default OurStoryPage;