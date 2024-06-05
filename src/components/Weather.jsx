import React from 'react'
import './style.css'

const Weather = () => {
    return (
        <>
            <div className="weather">
                <div className="weather__header">
                    <h1>Weather App</h1>
                </div>
                <div className="weather__search">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <div className="weather__info">
                    <h2>City Name</h2>
                    <h1>Temperature</h1>
                    <h3>Weather</h3>
                </div>
            </div>
        </>
    )
}

export default Weather;