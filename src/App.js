import React from "react";
import "./App.css";
// import bg from "./assets/cold-bg.jpg";

const api = {
  key: "7d3b537b1c55a7b72bee86d86c434b58",
  base: "https://home.openweathermap.org/data/2.5"
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
