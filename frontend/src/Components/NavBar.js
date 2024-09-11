import React from 'react'
import '../Styles/NavBar.css'

function NavBar() {
  return (
    <div className='navbar_container'>
        <div className='left_side'>
        <div className='logo_div'>
         Cabsi
        </div>
        <div className='left_right_div'>
        <div className='nav_item'>
         Ride
        </div>
        <div className='nav_item'>
         Drive
        </div>
        <div className='nav_item'>
         Business
        </div>
        <div className='nav_item'>
         About
        </div>
        </div>
    </div>
    <div className='right_side'>
        <div className='nav_item'>
         Eng
        </div>
        <div className='nav_item'>
         Help
        </div>
        <div className='nav_item'>
         Login
        </div>
        <div className='nav_item'>
         Sign Up
        </div>
    </div>

    </div>
  )
}

export default NavBar