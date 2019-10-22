import React, { useState } from "react";
import { connect, useSelector } from "react-redux";

import useIcon from "../../hooks/useIcon";
import useMesurements from "../../hooks/useMesurements";

import refreshIcon from "../../assets/refresh.png";

import "./index.scss";

const InfosCard = ({ data, background, refreshWeather }) => {
  const [face, setFace] = useState("recto");
  const cityName = useSelector(state => state.settings.city);
  const lastRefresh = useSelector(state => state.weather.lastRefresh);

  // Destructure data
  // Measurements
  const { temp, temp_max, temp_min } = data.main;
  // Weather
  const { description } = data.weather[0];

  const [iconSrc] = useIcon(data);
  const [mesurements] = useMesurements(data);

  const handleSwap = () => {
    if (face === "recto") {
      setFace("verso");
    } else {
      setFace("recto");
    }
  };

  return (
    <div
      className="card-weather container-fluid"
      // Display city background on card if param is selected
      style={{ backgroundImage: `url(${background})` }}
      onClick={() => handleSwap()}
    >
      <div className="row">
        {face === "recto" ? (
          <>
            <h2 className="card-weather-city">{cityName}</h2>
            <div className="col-6 card-weather-col-mesurements">
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
                <img src={iconSrc} alt="Logo" />
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="card-weather-city">{cityName}</h2>
            <div className="card-weather-mesurements-list">
              {mesurements.map(m => (
                <div className="card-weather-mesurements-item" key={m.name}>
                  <span className="card-weather-mesurements-item-name">
                    {m.name}
                  </span>
                  <span className="card-weather-mesurements-item-value">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="card-weather-refresh">
        <span>{lastRefresh}</span>
        <img
          className="card-weather-refresh-btn"
          src={refreshIcon}
          alt="Refresh"
          onClick={() => refreshWeather()}
        />
      </div>
    </div>
  );
};

export default connect()(InfosCard);
