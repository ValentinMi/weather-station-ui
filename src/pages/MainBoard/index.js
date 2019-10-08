import React, { useState } from "react";

import useWeather from "../../hooks/useWeather";
import useMediaWiki from "../../hooks/useMediaWiki";
import useBackgroundVideo from "../../hooks/useBackgroundVideo";
import useParameters from "../../hooks/useParameters";

import InfosCard from "../../components/InfosCard";
import Spinner from "../../components/Spinner/index";
import ParametersList from "../../components/ParametersList";

import settingsIcon from "../../assets/settings.png";

import { defaultCity } from "../../config/config.json";

import "./index.scss";

const MainBoard = () => {
  // useState hook
  const [city, setCity] = useState(defaultCity);
  const [, intervalRefresh] = useState();

  // Parameters custom hook
  const [paramsState, parameters, paramsActions] = useParameters();

  const {
    backgroundVideo,
    weatherInfos,
    mediaWikiImg,
    refreshInterval
  } = paramsState;

  // Weather custom hook
  const [weatherState, weatherActions, weatherIconSrc] = useWeather(
    city,
    refreshInterval
  );
  const {
    isLoading: weatherIsLoading,
    actualWeatherData,
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
            {
              <div className="row">
                <div className="col-md-6">
                  {weatherInfos && (
                    <InfosCard
                      data={actualWeatherData}
                      background={mediaWikiImg && imgSrc}
                      icon={weatherIconSrc}
                      refreshWeather={() =>
                        weatherActions.getTodayWeather(city)
                      }
                    />
                  )}
                </div>
                <div className="col-md-6">
                  {paramsState.isVisible ? (
                    <ParametersList
                      parameters={parameters}
                      closeAction={paramsActions.closeParameters}
                    />
                  ) : (
                    <img
                      className="settingsIcon"
                      src={settingsIcon}
                      alt="Settings"
                      onClick={() => paramsActions.openParameters()}
                    />
                  )}
                </div>
              </div>
            }
          </>
        )}
      </div>
    </>
  );
};

export default MainBoard;
