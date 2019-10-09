import React, { useState } from "react";

import useWeather from "../../hooks/useWeather";
import useMediaWiki from "../../hooks/useMediaWiki";
import useBackgroundVideo from "../../hooks/useBackgroundVideo";
import useParameters from "../../hooks/useParameters";

import InfosCard from "../../components/InfosCard";
import ForecastBoard from "../../components/ForecastBoard";
import Spinner from "../../components/Spinner/index";
import ParametersList from "../../components/ParametersList";

import settingsIcon from "../../assets/settings.png";

import "./index.scss";

const MainBoard = () => {
  // Parameters custom hook
  const [paramsState, parameters, paramsActions] = useParameters();

  const {
    backgroundVideo,
    weatherInfos,
    mediaWikiImg,
    refreshInterval,
    city
  } = paramsState;

  // Weather custom hook
  const [weatherState, fetchData, icons] = useWeather(refreshInterval, city);
  const {
    isLoading: weatherIsLoading,
    actualWeatherData,
    forecastData,
    error
  } = weatherState;

  // Wiki custom hook
  const [mediaWikiState] = useMediaWiki(city);
  const { isLoading: mediaWikiIsLoading, imgSrc } = mediaWikiState;

  // Background video custom hook
  const [BackgroundVideo] = useBackgroundVideo(actualWeatherData);

  // If error
  if (error !== null) return <h1>City not found</h1>;

  return (
    <>
      {backgroundVideo && <BackgroundVideo />}
      <div className="container-fluid board">
        {// Display spinner on loading
        weatherIsLoading || mediaWikiIsLoading ? (
          <Spinner isBackgroundSpinner={true} />
        ) : (
          <>
            <img
              className="settingsIcon"
              src={settingsIcon}
              alt="Settings"
              onClick={() => paramsActions.switchSettingsVisibility()}
            />
            <div className="row">
              <div className="col-md-6">
                {weatherInfos && (
                  <InfosCard
                    data={actualWeatherData}
                    background={mediaWikiImg && imgSrc}
                    icon={icons.actualWeatherIconSrc}
                    refreshWeather={() => fetchData()}
                  />
                )}
              </div>
              <div className="col-md-6 right-col">
                {weatherInfos && !paramsState.isVisible && (
                  <ForecastBoard data={forecastData} />
                )}
                {paramsState.isVisible && (
                  <ParametersList parameters={parameters} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainBoard;
