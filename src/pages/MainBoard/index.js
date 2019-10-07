import React, { useState } from "react";

import useWeather from "../../hooks/useWeather";
import useMediaWiki from "../../hooks/useMediaWiki";
import useBackgroundVideo from "../../hooks/useBackgroundVideo";

import InfosCard from "../../components/InfosCard";
import Spinner from "../../components/Spinner/index";

import { defaultCity } from "../../config/config.json";

import "./index.scss";

const MainBoard = () => {
  // Hooks
  const [city, setCity] = useState(defaultCity);

  const [weatherState, weatherActions, weatherIconSrc] = useWeather(city);
  const {
    isLoading: weatherIsLoading,
    actualWeatherData,
    error
  } = weatherState;

  const [mediaWikiState] = useMediaWiki(city);
  const { isLoading: mediaWikiIsLoading, imgSrc } = mediaWikiState;

  const [BackgroundVideo] = useBackgroundVideo(actualWeatherData);

  // If error
  if (error !== null) return <h1>City not found</h1>;

  return (
    <>
      <BackgroundVideo />
      <div className="container-fluid board">
        {// Display spinner on loading
        weatherIsLoading || mediaWikiIsLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <InfosCard
                  data={actualWeatherData}
                  background={imgSrc}
                  icon={weatherIconSrc}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainBoard;
