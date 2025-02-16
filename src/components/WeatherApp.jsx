import sunny from '../assets/images/sunny.png'
import rainy from '../assets/images/rainy.png'
import cloudy from '../assets/images/cloudy.png'
import snowy from '../assets/images/snowy.png'

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">London</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter location" />
            <i className="fa-solid fa-manifying-glass"></i>
          </div>
        </div>
        <div className="weather">
          <img src={sunny} alt="sunny" />
          <div className="weather-type">clear</div>
          <div className="temperature">28°C</div>
        </div>
        <div className="weather-date">
          <p>Monday, 3 May</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="dta-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="dta-value">50%</div>
          </div>
          <div className="wind">
            <div className="dta-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="dta-value">10km/h</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp