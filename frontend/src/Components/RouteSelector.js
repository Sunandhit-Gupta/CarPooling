import React from 'react'
import '../Styles/RouteSelector.css'
import DateTimeSelector from './DateTimeSelector'

function RouteSelector() {
  return (
    <>
                <h1>Go Anywhere with Cabsi</h1>
                <input className='locationInput' placeholder='PickUp Location'/>
                <input placeholder='Drop off'/>
                <span className='dateTime'>
                <DateTimeSelector/>
                </span>
                <button>Find Rides</button>

    </>
  )
}

export default RouteSelector