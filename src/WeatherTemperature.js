import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span className="temperature">{props.celsius}</span>
        <span>
          °C |{" "}
          <a href="" onClick={showFahrenheit} className="F">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span>
          <a href="" onClick={showCelsius} className="C">
            {" "}
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
