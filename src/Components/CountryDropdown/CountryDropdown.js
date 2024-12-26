import { Button } from '@mui/material'
import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
const CountryDropdown = () => {
  return (
    <div>
        <Button className='countryDrop '>
    
             <div className='info d-flex flex-column'>
                 <span className='label'>Your Location </span>
                 <span className='name'>Bangladesh</span>
            </div>
            <div>
                <span className='ml-auto'><FaAngleDown/></span>
            </div>
        </Button>                
    </div>
        

        
  )
}

export default CountryDropdown