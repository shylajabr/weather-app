import "./App.css";
import React from "react";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="new york" />
        <footer>
          This project was coded by <a href=" "> shyla </a> and is{" "}
          <a href="https://github.com/shylajabr/weather-app" target="-blank">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
