import React from 'react'
import './Navigation.css'
import { Button } from '@mui/material'
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
        <nav>
              <div className='container'>

                  <div className='row text-center align-items-center'>
                      <div className='col-sm-2 navPart1'> 
                        <Button className='allCatTab align-items-center'>
                        <span class="me-2"><IoIosMenu/></span>
                        <span class="text">ALL CATEGORIES</span>
                        <span class="icon2 ml-2"><FaAngleDown/></span>
                        </Button>

                      </div>

                      <div className='col-sm-10 navPart2'> 
                            <ul className="list list-inline ml-auto">
                                <li className='list-inline-item'><Link to="/">HOME</Link></li>
                                <li className='list-inline-item'><Link to="/">FASHION</Link></li>
                                <li className='list-inline-item'><Link to="/">ELECTRONIC</Link></li>
                                <li className='list-inline-item'><Link to="/">BAKERY</Link></li>
                                <li className='list-inline-item'><Link to="/">GROCERY</Link></li>
                                <li className='list-inline-item'><Link to="/">BLOG</Link></li>
                                <li className='list-inline-item'><Link to="/">CONTACT</Link></li>
                            </ul>
                      </div>

                  </div>

              </div>
          </nav>
    </div>
  )
}

export default Navigation