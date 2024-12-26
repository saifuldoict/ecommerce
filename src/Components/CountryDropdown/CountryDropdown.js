import { Button } from '@mui/material'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal]=useState(false);
  return (
    <div>
        <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
    
             <div className='info d-flex flex-column'>
                 <span className='label'>Your Location </span>
                 <span className='name'>Bangladesh</span>
            </div>
            <div>
                <span className='ml-auto'><FaAngleDown/></span>
            </div>
        </Button>  
        <Dialog open={true} className='locationModal'>
          <h4>Choose your Location</h4>
          <p>Enter your address and we will specify the offer your area. </p>
          <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose/></Button>
            <div className='headerSearch w-100'>
                <input type='text' placeholder='Search your area..........'/>
                 <Button><IoSearch/></Button>
            </div>
            <ul className='countryList mt-3'>
              <li><Button>Bangladesh</Button></li>
              <li><Button>India</Button></li>
              <li><Button>China</Button></li>
              <li><Button>USA</Button></li>
              <li><Button>Japan</Button></li>
              <li><Button>Thailand</Button></li>
              <li><Button>Sri Lanka</Button></li>
              <li><Button>Napal</Button></li>
              <li><Button>Kanada</Button></li>
              <li><Button>Pakistan</Button></li>
              <li><Button>Bangladesh</Button></li>
              <li><Button>Bangladesh</Button></li>
            </ul>
        </Dialog>              
    </div>
        

        
  )
}

export default CountryDropdown