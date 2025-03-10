// import { useEffect, useState } from "react";

// function LoadGoogleMaps() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     if (!window.google) {
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=**api**&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.onload = () => setIsLoaded(true);
//       document.head.appendChild(script);
//     } else {
//       setIsLoaded(true);
//     }
//   }, []);

//   return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
// }

// export default LoadGoogleMaps;

import { useEffect } from "react";

const loadGoogleMaps = (callback) => {
  if (!window.google) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=${callback}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  } else {
    callback();
  }
};

function App() {
  useEffect(() => {
    loadGoogleMaps(() => {
      console.log("Google Maps API Loaded");
    });
  }, []);

  return <div>Google Maps Integration</div>;
}

export default App;
