import React from "react";

import ForecastCard from "../ForecastCard";

import "./index.scss";

const TodayForecast = ({ data }) => {
  const { list } = data;

  const todayForecast = [list[0], list[1], list[2], list[3], list[4]];

  return (
    <div className="board-forecast">
      {todayForecast.map((forecast, index) => (
        <ForecastCard
          data={forecast}
          index={index}
          key={forecast.weather[0].main + index}
        />
      ))}
    </div>
  );
};

export default TodayForecast;
