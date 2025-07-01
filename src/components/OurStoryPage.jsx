import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const OurStoryPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 flex flex-col">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 flex-grow">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-teal-700 leading-tight">Our Story</h1>
        
        <div className="flex flex-col lg:flex-row items-start mb-8 sm:mb-16 mt-8">
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
            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-xl shadow-md border-l-4 border-teal-500">
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-slate-700 leading-relaxed">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg sm:text-xl font-light text-slate-800 italic mb-8 border-l-2 border-teal-300 pl-6">
                    "In loving memory of Michael Dale Voetberg, whose spirit of generosity continues to inspire acts of kindness across our communities."
                  </p>
                  
                  <p className="mb-6">
                    For thirty years, Bryan and Donna Voetberg have called Magnolia, Minnesota home, raising four sons with love and dedication. Their eldest, Michael, touched countless lives before his passing on March 13, 2019, after a courageous battle with depression and anxiety.
                  </p>
                  
                  <p className="mb-6">
                    Michael possessed an extraordinary musical gift—self-taught on electric guitar, drums, and piano. As lead guitarist for Youth Promise Band, he traveled to churches throughout the region, sharing contemporary music and spreading joy. His generous heart knew no bounds; he consistently helped those in need, often giving away his own belongings to lift others up.
                  </p>
                  
                  <p className="mb-6">
                    Following Michael's passing, we felt called to honor his memory by confronting the stigma surrounding mental health. Every life has purpose and meaning, and Michael's was no exception. In January 2023, we established Pay It Forward Tri-State, Inc., founded on the belief that random acts of kindness can alleviate the stressors that often worsen mental health challenges.
                  </p>
                  
                  <p className="mb-6">
                    While our communities are rich with resources, many remain unaware of available assistance. Rather than creating new programs, we bridge the gap—providing immediate support while connecting individuals to existing services. Our approach is hands-on and personal, meeting people where they are within a 60-mile radius of Magnolia.
                  </p>
                  
                  <p className="mb-6">
                    In our community outreach, we encounter individuals who feel disconnected and alone. Sometimes, the simple act of holding someone's hand can break through barriers that society has erected. Witnessing people discover their inherent worth and purpose—beyond society's narrow definitions—remains our greatest reward.
                  </p>
                  
                  <p className="mb-6">
                    As a faith-based organization, we place Christ at the center of our mission. We believe deeply that every person we encounter is beloved by God. Our commitment is to remain non-judgmental, never presuming to define what constitutes a "need," and trusting divine guidance to provide what each individual requires.
                  </p>
                  
                  <p className="mb-6">
                    Operating as a 501(c)(3) tax-exempt nonprofit, we witness extraordinary moments of grace through our work. Our Facebook group maintains privacy and security for those we serve, creating a safe space free from exploitation.
                  </p>
                  
                  <p className="mb-4">
                    We honor those in need by offering only items we would welcome in our own homes—treating every person with dignity and respect. Our standards reflect our values: we accept quality donations while declining broken items, damaged clothing, incomplete sets, old mattresses, and outdated televisions.
                  </p>
                  
                  <p className="text-teal-700 font-medium italic">
                    Through our website and community connections, we continue Michael's legacy of generosity, one act of kindness at a time.
                  </p>
                </div>
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