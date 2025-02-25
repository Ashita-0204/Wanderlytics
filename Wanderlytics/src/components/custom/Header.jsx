import React from 'react'
import { Button } from '../ui/Button';

function Header() {
  return (
    <div>
     <div className='p-3  shadow-sm flex justify-between items-center px-5'>
        <img src="" alt="logo"/>
        <div>
            <Button>Sign In</Button>
        </div>
        
        </div>
    </div>
  )
}

export default Header;
