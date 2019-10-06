import React, { useState } from "react";

import useWeather from "../../hooks/useWeather";
import useMediaWiki from "../../hooks/useMediaWiki";

import InfosCard from "../../components/InfosCard";
import Spinner from "../../components/Spinner/index";

import { defaultCity } from "../../config/config.json";

import "./index.scss";

const MainBoard = () => {
  // Hooks
  const [city, setCity] = useState(defaultCity);
  const [weatherState] = useWeather(city);
  const [mediaWikiState] = useMediaWiki(city);

  // Destructure state and rename isLoading
  const { isLoading: weatherIsLoading, todayData } = weatherState;
  const { isLoading: mediaWikiIsLoading, imgSrc } = mediaWikiState;

  return (
    <>
      <div className="container-fluid board">
        {// Display spinner on loading
        weatherIsLoading || mediaWikiIsLoading ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="col-md-6">
              <InfosCard data={todayData} background={imgSrc} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainBoard;
