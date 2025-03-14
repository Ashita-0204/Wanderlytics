import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
 

import LoadGoogleMaps from './LoadGoogleMaps.jsx'

    // S
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
    <LoadGoogleMaps />
    <RouterProvider router={router} />
  </React.StrictMode>
)
