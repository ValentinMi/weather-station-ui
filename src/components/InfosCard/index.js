import React from "react";

import "./index.scss";

const InfosCard = ({ data }) => {
  // Display spinner while data loading

  // Destructure data
  // Place
  const { name: city } = data;
  // Measurements
  const { humidity, pressure, temp, temp_max, temp_min } = data.main;
  // Weather
  const { description, icon } = data.weather[0];
  // Date

  const getWeathericon = iconId =>
    `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  return (
    <div className="card-weather container-fluid">
      <div className="row d-flex justify-content-center">
        <h2 className="card-weather-city">{city}</h2>
        <div className="col-6 card-weather-col-measurements">
          <h4 className="card-weather-description">
            {description.toUpperCase()}
          </h4>
          <span className="card-weather-temperature">{`${Math.round(
            temp
          )}°`}</span>
          <div className="card-weather-temperature-minmax">
            <span>MIN: {`${Math.round(temp_min)}°`}</span>
            <span>MAX: {`${Math.round(temp_max)}°`}</span>
          </div>
        </div>
        <div className="col-6">
          <div className="card-weather-icon">
            <img src={getWeathericon(icon)} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

function renderTodayCard() {
  return null;
}

export default InfosCard;
