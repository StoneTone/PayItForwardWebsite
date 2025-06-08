import React, { useEffect } from 'react';

const Homepage = () => {

  useEffect(() => {
    // Prevent multiple script loads
    const scriptId = 'google-maps-script';
    
    // Load the Google Maps JavaScript API with the marker library
    const initMap = () => {
      const mapElement = document.getElementById("map");
      if (!mapElement) return;

      // Double check that Google Maps is fully loaded
      if (!window.google || !window.google.maps || !window.google.maps.Map) {
        console.warn('Google Maps API not fully loaded, retrying...');
        setTimeout(initMap, 100);
        return;
      }

      const centerCoordinates = { lat: 43.654, lng: -96.075 }; // Coordinates for Magnolia, MN

      const map = new window.google.maps.Map(mapElement, {
        center: centerCoordinates,
        zoom: window.innerWidth < 768 ? 6 : 7, // Adjust zoom for mobile
        mapId: "DEMO_MAP_ID", // Required for AdvancedMarkerElement
      });

      // Add a circle to represent the service area
      new window.google.maps.Circle({
        strokeColor: "#00A99D",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00A99D",
        fillOpacity: 0.35,
        map,
        center: centerCoordinates,
        radius: 96560, // Radius in meters (60 miles = ~96,560 meters)
      });

      // Use AdvancedMarkerElement instead of deprecated Marker
      if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
        new window.google.maps.marker.AdvancedMarkerElement({
          position: centerCoordinates,
          map,
          title: "Magnolia, MN", // Tooltip text when hovering over the marker
        });
      } else {
        // Fallback to regular marker if AdvancedMarkerElement is not available
        new window.google.maps.Marker({
          position: centerCoordinates,
          map,
          title: "Magnolia, MN",
        });
      }
    };

    // Set up global callback function
    window.initGoogleMap = initMap;

    // Check if Google Maps is already fully loaded
    if (window.google && window.google.maps && window.google.maps.Map) {
      initMap();
      return;
    }

    // Check if script is already loading/loaded
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      return; // Script already exists, callback will be called when ready
    }

    // Create and load the script with callback
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&libraries=marker&callback=initGoogleMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      console.error('Failed to load Google Maps script');
    };
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Clean up global callback
      if (window.initGoogleMap) {
        delete window.initGoogleMap;
      }
    };
  }, []);
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50">
      {/* Navigation */}
      <nav className="bg-slate-800 text-white px-4 sm:px-6 py-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <a href="/" className="text-lg sm:text-xl font-bold tracking-wide hover:text-teal-200 transition-colors">
              Pay It Forward Tri-State, Inc.
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/our-story" className="hover:text-teal-200 transition-colors">Our Story</a>
              <a href="/volunteer" className="hover:text-teal-200 transition-colors">Volunteer</a>
              <a href="/give" className="hover:text-teal-200 transition-colors">Give</a>
              <a href="/contact" className="hover:text-teal-200 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center mb-8 sm:mb-16">
          {/* Logo */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mb-6 sm:mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
            <div className="w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-teal-200">
              <img 
                src="/logo.png" 
                alt="Pay It Forward Tri-State Logo" 
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="text-slate-700 max-w-3xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 text-teal-700 leading-tight">
              The hands & feet of Jesus Christ
            </h1>
            <div className="bg-teal-600 text-white px-4 py-2 rounded-lg inline-block mb-6 sm:mb-8">
              <p className="text-base sm:text-lg font-medium">501(c)3 EIN: 93-2407035</p>
            </div>
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-teal-700">Mindful assistance for those in need</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Are you in need of something, but just don't like to ask? Send us a personal message or post anonymously!</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-teal-700">Keeping items out of our landfills</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Do you have items that you no longer need, but do not want to throw them or haul them away? We accept donations and will pick up when we can!</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-teal-700">Providing mental health awareness & suicide prevention</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Are you struggling with mental health or thoughts of suicide? Reach out and we will help you with that first step!</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-teal-700">Pay it forward</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Has someone done something for you and you want to pay it forward? Review our posts and pay forward what you can!</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-teal-700">Join our teams</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Do you have a service that you would like to share with others? Join one of our teams.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="bg-teal-600 text-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl mb-8 sm:mb-16 text-center">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light italic leading-relaxed">
            "There will never be two eyes that you look into that God does not love."
          </blockquote>
          <div className="mt-4 sm:mt-6 text-teal-100">
            <p className="text-lg sm:text-xl">- Donna Votberg</p>
            <p className="text-base sm:text-lg opacity-75">(Founder)</p>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-6 sm:mb-8 text-center">Service Area</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 sm:space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-2">60 Mile Radius of</h3>
              <p className="text-lg sm:text-xl text-teal-600 font-medium mb-4">Magnolia, MN</p>
              <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                Serving the Tri-State Area since 2023, connecting communities with needed resources and support.
              </p>
            </div>
            <div
              id="map"
              className="w-full max-w-sm sm:max-w-md lg:w-96 h-64 sm:h-80 bg-slate-100 rounded-xl shadow-inner overflow-hidden"
            ></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-1 bg-teal-500 rounded-full mb-4 sm:mb-6"></div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">Upcoming Events</h3>
            <div className="text-slate-600">
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="font-semibold text-teal-700 mb-1">Soup Supper & Pie Auction</p>
                <p className="text-sm">Date and location TBD</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-1 bg-teal-500 rounded-full mb-4 sm:mb-6"></div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">News</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Past help that we should list especially when it is a philanthropy</p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-1 bg-teal-500 rounded-full mb-4 sm:mb-6"></div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">Make a donation</h3>
            <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">Make a donation here or elsewhere</p>
            <a 
              href="/give" 
              className="inline-block bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition-colors text-sm sm:text-base font-medium"
            >
              Learn more about giving
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;