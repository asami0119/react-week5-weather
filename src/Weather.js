import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState("");

  function showInfo(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: "Monday 07:00",
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.loaded) {
    function handleChange(event) {
      event.preventDefault();
      setCity(event.target.value);
    }

    return (
      <div className="container">
        <form className="form">
          <input
            type="serach"
            placeholder="Enter a city..."
            className="Search mt-5"
            autoFocus="on"
            onChange={handleChange}
          />{" "}
          <input
            type="submit"
            className="Submit btn btn-primary btn-sm p-1 mb-1"
            //onSubmit={handleSubmit}
          />
        </form>
        <div className="weather mt-2 mb-3">
          <h5>{weatherData.city}</h5>
          <div>
            <span className="temperature">{weatherData.temperature}</span>°C
          </div>
          <p>{weatherData.description}</p>
          <div className="row mb-5">
            <div className="col-6">H:30°C</div>
            <div className="col-6">L:17°C</div>
          </div>
        </div>

        <div className="weather2 mb-3 shadow">
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="mt-2 mb-2">{weatherData.date}</li>
                <li>
                  <img
                    src={weatherData.icon}
                    alt="weather.description"
                    className="mt-2 mb-2"
                  />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mt-2 mb-2">Precipitation: 40%</li>
                <li className="mt-2 mb-2">Humidity: {weatherData.humidity}%</li>
                <li className="mt-2 mb-2">Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "01e6c99e19f4b3595e992027a30a8417";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showInfo);

    return "Loading...";
  }
}
