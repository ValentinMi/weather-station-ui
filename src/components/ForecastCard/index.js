import React from "react";
import useWeather from "../../hooks/useWeather";

import "./index.scss";

const ForecastCard = ({ data, index }) => {
  const degree = data.main.temp;
  const date = data.dt_txt;

  const [, , icons] = useWeather();

  const stringDate = new Date(date).toLocaleString();

  return (
    <div className="card-forecast">
      <img
        className="card-forecast-icon"
        src={icons.getForecastIconSrc(index)}
        alt=""
      />
      <span className="card-forecast-degree">{parseInt(degree)}°</span>
      <span className="card-forecast-date">{stringDate}</span>
    </div>
  );
};

export default ForecastCard;
