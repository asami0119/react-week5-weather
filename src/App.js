import React from "react";
import Weather from "./Weather";
import sunnyImage from "./images/sunny.image.jpg";

import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${sunnyImage})` }}>
      <div className="overlay">
        <div className="container">
          <Weather defaultCity="Toronto" />
          <p>
            This project was coded by
            <a
              href="https://www.linkedin.com/in/asami-uehara-704999223/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Asami Uehara
            </a>{" "}
            and is open-sourced on
            <a
              href="https://github.com/asami0119/react-week5-weather"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>
          </p>
          <header className="App-header"></header>
        </div>
      </div>
    </div>
  );
}

export default App;
