import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
 
    const loadGoogleMapsScript = (callback) => {
      if (document.querySelector("script[src*='gomaps.pro/maps/api/js']")) {
        callback(); // Script already loaded
        return;
      }
    
      const script = document.createElement("script");
      script.src = `https://maps.gomaps.pro/maps/api/js?key=${import.meta.env.VITE_GOMAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = callback;
      document.body.appendChild(script);
    };
    
const router=createBrowserRouter([{
  path:'/',
  element:<App/>
},
{
  path:'/create-trip',
  element:<CreateTrip/>
}])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
)
