import React from "react";

import refreshIcon from "../../assets/refresh.png";

import "./index.scss";

const InfosCard = ({ data, background, icon, refreshWeather }) => {
  // Destructure data
  // Place
  const { name: city } = data;
  // Measurements
  const { temp, temp_max, temp_min } = data.main;
  // Weather
  const { description } = data.weather[0];
  // Date

  return (
    <div
      className="card-weather container-fluid"
      // Display city background on card if param is selected
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="row">
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
            <img src={icon} alt="Logo" />
          </div>
        </div>
      </div>
      <img
        className="card-weather-refresh"
        src={refreshIcon}
        alt="Refresh"
        onClick={() => refreshWeather()}
      />
    </div>
  );
};

export default InfosCard;
