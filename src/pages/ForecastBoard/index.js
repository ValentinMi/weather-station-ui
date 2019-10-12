import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import useBackgroundVideo from "../../hooks/useBackgroundVideo";

import ForecastCard from "../../components/ForecastCard";

import "./index.scss";

const ForecastBoard = ({ weather, settings }) => {
  const [nextDays, setNextDays] = useState([]);

  // Background video custom hook
  const [BackgroundVideo] = useBackgroundVideo(weather.actualWeatherData);

  const { forecastData } = weather;

  useEffect(() => {
    if (forecastData !== undefined) {
      setNextDays(
        forecastData.list.filter(day => day.dt_txt.endsWith("12:00:00"))
      );
    }
  }, [forecastData]);

  return (
    <>
      {settings.backgroundVideo && <BackgroundVideo />}
      <div className="container-fluid forecast-board">
        <div className="row">
          {nextDays.map((day, index) => (
            <ForecastCard data={day} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  settings: state.settings,
  weather: state.weather
});

export default connect(mapStateToProps)(ForecastBoard);
