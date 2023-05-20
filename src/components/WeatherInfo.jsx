import React from "react";

function WeatherInfo({ weatherData }) {
  console.log(weatherData);
  const icon = weatherData.weather[0].icon;
  const URL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather">
      <h2>{weatherData.name}</h2>
      <img src={URL} alt="" />
      <p>Temperatur: {weatherData.main.temp}°C</p>
      <p>Luftfeuchtigkeit: {weatherData.main.humidity}%</p>
      <p>Wetterbedingungen: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
