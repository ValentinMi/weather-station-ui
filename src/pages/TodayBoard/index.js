import React, { useEffect } from "react";

import { useWeather } from "../../hooks/useWeather";

import InfosCard from "../../components/InfosCard";
import Spinner from "../../components/shared/Spinner/index";

const TodayBoard = () => {
  const [state, weatherActions] = useWeather();

  const { isLoading } = state;

  return (
    <>
      <div className="container-fluid board">
        <div className="row">
          <div className="col-md-4">
            {isLoading ? <Spinner /> : <InfosCard data={state.todayData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayBoard;
