import React from 'react'
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
 
function Lay() {
  return (
    <div className='flex items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
       <span className='text-#9b58bf'>Unfold AI-Powered Wanderlust</span>Itineraries designed just for you
      </h1>
      <p className='text-xl text-gray-500 text-center'> Discover the world's most incredible destinations, tailored to your interests and preferences.</p>
     
      <Link to={'/create-trip'}>
      <Button>Let's Wander</Button>
      </Link>
    </div>
  )
}

export default Lay;
