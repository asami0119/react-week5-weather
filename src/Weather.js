import React from "react";

export default function Weather() {
  return (
    <div className="container">
      <form className="form">
        <input
          type="serach"
          placeholder="Enter a city..."
          className="Search mt-5"
          autoFocus="on"
        />{" "}
        <input
          type="submit"
          className="Submit btn btn-primary btn-sm p-1 mb-1"
        />
      </form>
      <div className="weather mt-2 mb-3">
        <h5>Toronto</h5>
        <div>
          <span className="temperature">23</span>°C
        </div>
        <p>Sunny</p>
        <div className="row mb-5">
          <div className="col-6">H:30°C</div>
          <div className="col-6">L:17°C</div>
        </div>
      </div>

      <div className="weather2 mb-3 shadow">
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="mt-2 mb-2">Monday 07:00</li>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                  alt="sunny"
                  className="mt-2 mb-2"
                />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li className="mt-2 mb-2">Precipitation: 15%</li>
              <li className="mt-2 mb-2">Humidity: 40%</li>
              <li className="mt-2 mb-2">Wind: 2km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
