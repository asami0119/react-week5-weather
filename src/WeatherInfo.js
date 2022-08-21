import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather mt-2 mb-3">
        <h5>{props.data.city}</h5>
        <div>
          <span className="temperature">{props.data.temperature}</span>°C
        </div>
        <p>{props.data.description}</p>
        <div className="row mb-5">
          <div className="col-6">H:30°C</div>
          <div className="col-6">L:17°C</div>
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
                <img
                  src={props.data.icon}
                  alt={props.data.description}
                  className="mt-2 mb-2"
                />
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
