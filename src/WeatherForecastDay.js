import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function MaxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return (
      <div className="WeatherForecast-Temperature-max">
        {temperature}
        <span className="ms-1 unit">°C</span>
      </div>
    );
  }

  function MinTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return (
      <div className="WeatherForecast-Temperature-min">
        {temperature}
        <span className="ms-1 unit">°C</span>
      </div>
    );
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-Date mb-2">{day()}</div>
      <div className="WeatherForecast-icon mb-2">
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
      </div>
      <div className="WeatherForecast-Temperature">
        <span className="WeatherForecast-Temperature-max">
          {MaxTemperature()}
        </span>
        {"  "}
        <span className="WeatherForecast-Temperature-min">
          {MinTemperature()}
        </span>
      </div>
    </div>
  );
}
