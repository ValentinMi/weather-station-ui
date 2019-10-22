import React from "react";
import { connect, useSelector } from "react-redux";

import useIcon from "../../hooks/useIcon";

import "./index.scss";

const ForecastCard = ({ data }) => {
  const degree = data.main.temp;
  const date = new Date(data.dt_txt);
  const treatedDate = `${date.getDay()}/${date.getMonth()} ${date.getHours()}h`;

  const [iconSrc] = useIcon(data);

  const selectedPeriod = useSelector(state => state.settings.selectedPeriod);

  switch (selectedPeriod) {
    case "today":
      return (
        <div className="card-forecast-today">
          <img className="card-forecast-today-icon" src={iconSrc} alt="" />
          <span className="card-forecast-today-degree">
            {parseInt(degree)}°
          </span>
          <span className="card-forecast-today-date">{treatedDate}</span>
        </div>
      );
    case "week":
      return (
        <div className="card-forecast-week col-12">
          <img className="card-forecast-week-icon" src={iconSrc} alt="" />
          <span className="card-forecast-week-degree">{parseInt(degree)}°</span>
          <span className="card-forecast-week-date">{treatedDate}</span>
        </div>
      );

    default:
      break;
  }
};

export default connect()(ForecastCard);
