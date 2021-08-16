import React from "react";
import "./App.css";
// import bg from "./assets/cold-bg.jpg";

const api = {
  key: "7d3b537b1c55a7b72bee86d86c434b58",
  base: "https://home.openweathermap.org/data/2.5"
};

function App() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search places..."
          />
        </div>
        <div className="location-box">
          <div className="location">Tashkent, UZB</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
