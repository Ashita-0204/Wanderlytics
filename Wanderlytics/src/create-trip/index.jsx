import React from 'react'
import PlaceAutocomplete from '../components/AutoComplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
function CreateTrip() {
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
     <h2 className='font-bold text-3xl'>Your Prefereneces</h2> 
     <p className='mt-3 text-gray-500 text-xl'>
       Just provide us with basic information and lets Wanderltics do the rest for you
     </p>

     <div>
        <div className='mt-20'>
           <h2 className='text-xl my-3 font-medium'> What is destination of your choice</h2>
           <GooglePlacesAutocomplete
           apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
           />

           {/* <PlaceAutocomplete  apiKey={import.meta.env.VITE_GOMAPS_API_KEY} */}
           
             {/* /> */}
             
        </div>
     </div>
    </div>
  )
}

export default CreateTrip;
