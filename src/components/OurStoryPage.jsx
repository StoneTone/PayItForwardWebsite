import React from 'react';
import { Link } from 'react-router-dom';

const OurStoryPage = () => {
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
          
          {/* Our Story Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h1>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
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
  );
};

export default OurStoryPage;