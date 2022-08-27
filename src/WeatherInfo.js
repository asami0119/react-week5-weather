import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather mt-2 mb-3">
        <h5>{props.data.city}</h5>
        <WeatherTemperature celsius={props.data.temperature} />
        <p>{props.data.description}</p>
        <div className="row mb-5">
          <div className="col-6">H:{props.data.max}°C</div>
          <div className="col-6">L:{props.data.min}°C</div>
        </div>
      </div>

      <div className="weather2 mb-3 shadow">
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="mt-2 mb-2">
                <FormattedDate date={props.data.date} />
              </li>
              <li>
                <div className="float-left ms-3 icon">
                  <WeatherIcon code={props.data.icon} size={50} />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li className="mt-2 mb-2">Precipitation: 40%</li>
              <li className="mt-2 mb-2">Humidity: {props.data.humidity}%</li>
              <li className="mt-2 mb-2">Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
