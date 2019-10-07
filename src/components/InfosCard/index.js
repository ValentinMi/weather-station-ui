import React from "react";

import "./index.scss";

const InfosCard = ({ data, background, icon }) => {
  // Display spinner while data loading

  // Destructure data
  // Place
  const { name: city } = data;
  // Measurements
  const { humidity, pressure, temp, temp_max, temp_min } = data.main;
  // Weather
  const { description } = data.weather[0];
  // Date

  return (
    <div
      className="card-weather container-fluid"
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
    </div>
  );
};

export default InfosCard;
