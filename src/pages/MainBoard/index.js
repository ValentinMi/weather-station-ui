import React from "react";

import { useWeather } from "../../hooks/useWeather";

import InfosCard from "../../components/InfosCard";
import Spinner from "../../components/Spinner/index";

import "./index.scss";

const MainBoard = () => {
  const [state, weatherActions] = useWeather();

  const { isLoading, todayData } = state;

  return (
    <>
      <div className="container-fluid board">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="col-md-6">
              <InfosCard data={todayData} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainBoard;
