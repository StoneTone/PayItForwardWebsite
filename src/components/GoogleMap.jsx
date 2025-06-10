import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    // Initialize Google Map
    const initMap = () => {
      const mapElement = document.getElementById("map");
      if (!mapElement) return;

      // Check if Google Maps is fully loaded
      if (!window.google || !window.google.maps || !window.google.maps.Map) {
        console.warn('Google Maps API not fully loaded, retrying...');
        setTimeout(initMap, 100);
        return;
      }

      try {
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

        // Use AdvancedMarkerElement if available, otherwise fall back to regular Marker
        if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
          new window.google.maps.marker.AdvancedMarkerElement({
            position: centerCoordinates,
            map,
            title: "Magnolia, MN",
          });
        } else {
          // Fallback to regular marker
          new window.google.maps.Marker({
            position: centerCoordinates,
            map,
            title: "Magnolia, MN",
          });
        }

      } catch (error) {
        console.error('Error initializing Google Maps:', error);
      }
    };

    // Load the Google Maps API
    const loadGoogleMapsAPI = () => {
      // Check if already loaded
      if (window.google && window.google.maps && window.google.maps.Map) {
        initMap();
        return;
      }

      // Check if script already exists
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        // Script exists, wait for it to load
        const checkGoogleLoaded = () => {
          if (window.google && window.google.maps && window.google.maps.Map) {
            initMap();
          } else {
            setTimeout(checkGoogleLoaded, 100);
          }
        };
        checkGoogleLoaded();
        return;
      }

      // Create the script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&libraries=marker&loading=async`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        // Wait a bit for libraries to fully initialize
        setTimeout(initMap, 100);
      };
      
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
      };

      document.head.appendChild(script);
    };

    loadGoogleMapsAPI();
  }, []);

  return (
    <div
      id="map"
      className="w-full max-w-sm sm:max-w-md lg:w-96 h-64 sm:h-80 bg-slate-100 rounded-xl shadow-inner overflow-hidden"
    ></div>
  );
};

export default GoogleMap;