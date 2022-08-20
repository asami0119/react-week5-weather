import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <button className="btn btn-primary">hello</button>
        <p>
          This project was coded by
          <a
            href="https://www.linkedin.com/in/asami-uehara-704999223/"
            target="_blank"
          >
            {" "}
            Asami Uehara
          </a>{" "}
          and is open-sourced on
          <a
            href="https://github.com/asami0119/react-week5-weather"
            target="_blank"
          >
            {" "}
            GitHub
          </a>
        </p>
        <header className="App-header"></header>
      </div>
    </div>
  );
}

export default App;
