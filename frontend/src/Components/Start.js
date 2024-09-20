import React from 'react'
import '../Styles/Start.css'
import mouse_car from '../Assets/mouse_car.png'
import RouteSelector from './RouteSelector'
function Start() {
  return (
    <div className='main_page'>
        <div className='top_container'>
            <div className='top_left'>
              <RouteSelector/>
            </div>
            <div className='top-right'>
                <img src= {mouse_car} alt='Mouse_Car' height={"400px"} />
            </div>
        </div>
    </div>
  )
}

export default Start