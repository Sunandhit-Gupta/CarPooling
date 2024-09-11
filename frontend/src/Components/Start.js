import React from 'react'
import '../Styles/Start.css'
import mouse_car from '../Assets/mouse_car.png'
function Start() {
  return (
    <div className='main_page'>
        <div className='top_container'>
            <div className='top_left'>
                <h1>Go Anywhere with Cabsi</h1>
            </div>
            <div className='top-right'>
                <img src= {mouse_car} alt='Mouse_Car' height={"400px"} />
            </div>
        </div>
    </div>
  )
}

export default Start