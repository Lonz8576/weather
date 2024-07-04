import { useState } from 'react'

import sunny from './assets/sun.png'

import './index.css'
import WeatherApp from './WeatherApp'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <div className='weather-app'>
             <div className='search-up'>
              <i className='fa-solid fa-location-dot'></i>
                    <div className='local'>London</div>
                    </div>
                    <div className='search-bar'>
                      <input type='text' placeholder='Enter a location..' />
                    <i className='fa-solid fa-magnifying-glass'></i>
                    </div>

            <div className='weather-icon'>
              <img src={sunny} alt='sunny' />
            </div>
            <div className='weather-description'>Clear & Sunny</div>
            <div className='temp'>30° C</div>
            <div className='date'><p>Friday, <strong>July 30,</strong> 2024</p></div>
            <div className='weather-details'>
                <div className='humidity'>Humidity</div>
                <i className='fa-solid fa-droplet'> 80%</i>

                <div className='humidity'>Wind</div>
                <i className='fa-solid fa-wind'> 16 km/h</i>
            </div>
            </div>









    </div>
      <WeatherApp />
    </div>
  )
}

export default App
