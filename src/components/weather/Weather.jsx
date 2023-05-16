import "./weather.css";
import { useState } from "react";

const api = {
  key: "88426fcf92e5609ecb530a59bfbbf140",
  base: "https://api.openweathermap.org/data/2.5",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}/weather?q=${search}&units==metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1 className="header__heading">Weather App</h1>
        {/* Search Box */}
        <div>
          <input
            className="input__button"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          /><br/>
          <button onClick={searchPressed} className = "btn btn-primary">Search</button>
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="continer">
            <p className="container__name">{weather.name}</p>
            <p className="container__temp">{Math.round((weather.main.temp - 273.15) * 10) / 10}°C</p>

            <p className="container__desc">{weather.weather[0].main}</p>
            <p className="container__desc__small">{weather.weather[0].description}</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Weather;
