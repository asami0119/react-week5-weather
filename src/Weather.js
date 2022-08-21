import React from "react";

export default function Weather() {
  return (
    <div className="container">
      <form className="form">
        <input
          type="serach"
          placeholder="Enter a city..."
          className="Search mt-5"
        />{" "}
        <input
          type="submit"
          className="Submit btn btn-primary btn-sm p-1 mb-1"
        />
      </form>
      <div className="weather mt-2 mb-3">
        <h5>Toronto</h5>
        <h1>23°C</h1>
        <p>Sunny</p>
        <div className="row mb-5">
          <div className="col-6">H:30°C</div>
          <div className="col-6">L:17°C</div>
        </div>
      </div>

      <div className="weather2 mb-3">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Monday 07:00</li>
              <li>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                  alt="sunny"
                />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 40%</li>
              <li>Wind: 2km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
