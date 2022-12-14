import React from "react";
import Weather from "./Weather";
import Image from "./images/sunrise.bg.jpg";

import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${Image})`, backgroundSize: `cover` }}
    >
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
            </a>{" "}
            and{" "}
            <a
              href="https://shimmering-malabi-14b9c1.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </p>
          <header className="App-header"></header>
        </div>
      </div>
    </div>
  );
}

export default App;
