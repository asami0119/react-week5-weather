import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function showInfo(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "01e6c99e19f4b3595e992027a30a8417";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showInfo);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.loaded) {
    return (
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
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
          />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
