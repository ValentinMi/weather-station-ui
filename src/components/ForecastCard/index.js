import React from "react";
import { connect } from "react-redux";

import useIcon from "../../hooks/useIcon";

import "./index.scss";

const ForecastCard = ({ data, settings }) => {
  const degree = data.main.temp;
  const date = data.dt_txt;
  const stringDate = new Date(date).toLocaleString();

  const [iconSrc] = useIcon(data);

  switch (settings.selectedPeriod) {
    case "today":
      return (
        <div className="card-forecast-today">
          <img className="card-forecast-today-icon" src={iconSrc} alt="" />
          <span className="card-forecast-today-degree">
            {parseInt(degree)}°
          </span>
          <span className="card-forecast-today-date">{stringDate}</span>
        </div>
      );
    case "week":
      return (
        <div className="card-forecast-week col-3">
          <img className="card-forecast-week-icon" src={iconSrc} alt="" />
          <span className="card-forecast-week-degree">{parseInt(degree)}°</span>
          <span className="card-forecast-week-date">{stringDate}</span>
        </div>
      );

    default:
      break;
  }
};

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(mapStateToProps)(ForecastCard);
