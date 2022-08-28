import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-Date">Sun</div>
            <WeatherIcon code="50d" size={35} />
            <div className="WeatherForecast-Temperature">
              <span className="WeatherForecast-Temperature-max">
                {forecast[0].temp.max}°
              </span>
              {"  "}
              <span className="WeatherForecast-Temperature-min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "01e6c99e19f4b3595e992027a30a8417";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}$units=metric`;

    axios.get(apiUrl).then(showForecast);
  }
}
