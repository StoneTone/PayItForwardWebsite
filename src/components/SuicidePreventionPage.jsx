import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const SuicidePreventionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 flex flex-col">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-teal-700 leading-tight">
            Suicide Prevention Resources
          </h1>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-teal-500 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-4">
              Pay It Forward Tri-State offers a direct link to suicide prevention resources within the area. 
              Suicide affects millions of people each year. Everyone has been affected in some way, 
              if you or someone you know is a suicide survivor, know that you are not alone.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <p className="text-red-800 font-semibold text-lg sm:text-xl">
                If you or someone you know is struggling with suicidal thoughts, please reach out to{' '}
                <span className="text-red-600 text-2xl font-bold">988</span>. 
                They are available 24/7 via call, text or chat at{' '}
                <a 
                  href="https://988lifeline.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 underline transition-colors"
                >
                  988lifeline.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Crisis Support Section */}
        <div className="bg-teal-600 text-white p-8 sm:p-12 rounded-2xl shadow-xl mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">24/7 Crisis Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Call or Text</h3>
              <p className="text-6xl font-bold mb-2">988</p>
              <p className="text-lg">National Suicide Prevention Lifeline</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Online Chat</h3>
              <a 
                href="https://988lifeline.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-bold text-white hover:text-teal-200 underline transition-colors"
              >
                988lifeline.org
              </a>
              <p className="text-lg mt-2">Live chat available 24/7</p>
            </div>
          </div>
        </div>

        {/* Tri-State Resources */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-8 text-center">
            Tri-State Suicide Prevention Resources
          </h2>
          
          {/* Minnesota Resources */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">MN</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Minnesota Resources</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                <h4 className="text-xl font-semibold text-teal-700 mb-3">
                  Minnesota Suicide Prevention Trainer Network
                </h4>
                <p className="text-slate-600 mb-4">
                  Offers trainings at little to no cost including QPR (Question, Persuade, Refer), 
                  Mental Health First Aid, Counseling of Access to Lethal Means, and more.
                </p>
                <p className="text-slate-600 mb-4">
                  Please reach out to the Southwest MN Regional Coordinator for more information 
                  regarding free trainings or suicide prevention resources.
                </p>
                <a 
                  href="https://www.preventsuicidemn.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Visit Website
                </a>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">NAMI Southwest Minnesota</h5>
                  <p className="text-sm text-slate-600 mb-2">
                    Non-profit organization dedicated to improving lives of children and adults 
                    with mental health illnesses.
                  </p>
                  <a 
                    href="https://namimn.org/find-your-local-nami/4864/nami-southwest-minnesota/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 text-sm underline"
                  >
                    Learn More
                  </a>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">Southwest Health and Human Services</h5>
                  <a 
                    href="https://swmhhs.com/social-services/adult-mental-health/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 text-sm underline"
                  >
                    Visit Website
                  </a>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">Des Moines Valley Health and Human Services</h5>
                  <a 
                    href="https://www.dvhhs.org/?SEC=4747ACA2-3E00-4977-85F2-035F0B0B0221" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 text-sm underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* South Dakota Resources */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">SD</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">South Dakota Resources</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                <h4 className="text-xl font-semibold text-teal-700 mb-3">
                  Helpline Center – Sioux Falls, SD
                </h4>
                <p className="text-slate-600 mb-4">
                  The Helpline Center offers many grief and loss supports such as support groups, 
                  grief classes, and suicide prevention trainings.
                </p>
                <p className="text-slate-600 mb-4">
                  Please reach out to Arianna Santos at{' '}
                  <a 
                    href="mailto:Arianna.santos@helplinecenter.org" 
                    className="text-teal-600 hover:text-teal-800 underline"
                  >
                    Arianna.santos@helplinecenter.org
                  </a>
                  {' '}for more information about these resources.
                </p>
                <a 
                  href="https://www.helplinecenter.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Visit Website
                </a>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">South Dakota Suicide Prevention</h5>
                  <a 
                    href="https://www.sdsuicideprevention.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 text-sm underline"
                  >
                    Visit Website
                  </a>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">South Dakota Veterans Affairs</h5>
                  <a 
                    href="https://www.va.gov/sioux-falls-health-care/health-services/suicide-prevention/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 text-sm underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Iowa Resources */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">Iowa Resources</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                <h4 className="text-xl font-semibold text-teal-700 mb-3">Your Life Iowa</h4>
                <p className="text-slate-600 mb-4">
                  Comprehensive mental health and suicide prevention resources for Iowa residents.
                </p>
                <a 
                  href="https://yourlifeiowa.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Visit Website
                </a>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-slate-800 mb-2">Sioux Land Mental Health Center</h5>
                  <a 
                    href="https://www.siouxlandmentalhealth.com/crisis-center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 text-sm underline"
                  >
                    Crisis Center
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* National Resources */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">US</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">National Resources</h3>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
              <h4 className="text-xl font-semibold text-teal-700 mb-3">
                American Foundation for Suicide Prevention
              </h4>
              <p className="text-slate-600 mb-4">
                Comprehensive information on risk factors, protective factors, and warning signs.
              </p>
              <a 
                href="http://afsp.org/risk-factors-protective-factors-and-warning-signs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Support Message */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8 sm:p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">You Are Not Alone</h2>
          <p className="text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto">
            If you're struggling with thoughts of suicide, please know that help is available. 
            Reaching out for support is a sign of strength, not weakness. 
            There are people who want to help you through this difficult time.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SuicidePreventionPage;