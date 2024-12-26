import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import CountryDropdown from '../CountryDropdown/CountryDropdown'
import { Button } from '@mui/material'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Navigation from '../Navigation/Navigation'


const Header = () => {
  return (
    <div className='header-Wrapper'>
       <div className='top-strip bg-purple'>
          <div className='container'>
              <marquee className='mb-0 mt-0 text-center text-white' width="80%" direction="right" height="30px">
                <span className='text-danger font-bold'>30%</span> off all products.
              </marquee>
          </div>
       </div>
          <header className='header'>
              <div className='container'>
                  <div className='row'>
                       <div className='logoWrapper d-flex align-items-center col-sm-2'>
                            <Link to ={'/'}><img src={logo} alt='Logo'/></Link>
                       </div>

                       <div className='col-sm-10 d-flex align-items-center part-2'>
                              <CountryDropdown></CountryDropdown>

                              {/* Header Search Start Here */}

                            <div className='headerSearch ml-3 mr-3'>
                              <input type='text' placeholder='Search for products..........'/>
                              <Button><IoSearch/></Button>
                            </div>
                              {/* Header Search Ends Here */}

                              <div className='part-3 d-flex align-items-center ml-auto'>
                                      <Button className='circle mr-3'><FaRegUser/></Button>
                                      <span className='price'>$ 3.40</span>
                                      <Button className='circle ml-2'><IoBagOutline/></Button>
                                      

                              </div>

                             
                       </div>

                  </div>

              </div>
          </header>

          <Navigation></Navigation>






    </div>
  )
}

export default Header