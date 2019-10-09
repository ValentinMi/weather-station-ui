import { useEffect } from "react";

import * as weatherConst from "../consts/weather.const";
import { getTodayWeather } from "../actions/weather.actions";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import useMiddleware from "react-usemiddleware";

const useWeather = (refreshInterval, city) => {
  const initState = {
    selectedPeriod: "today",
    actualWeatherData: undefined,
    nextData: undefined,
    isLoading: true,
    error: null
  };

  const [state, dispatch] = useMiddleware(weatherReducer, initState, [
    promise,
    thunk
  ]);

  // Map actions in object
  const weatherActions = {
    getTodayWeather: city => dispatch(getTodayWeather(city))
  };

  // Refresh weather on period change
  useEffect(() => {
    switch (state.selectedPeriod) {
      case "today":
        weatherActions.getTodayWeather(city);
        console.log("bite");
        break;

      default:
        throw new Error("Unknown selected period");
    }
  }, [city, state.selectedPeriod]);

  // Interval refresh
  useEffect(() => {
    setInterval(() => {
      weatherActions.getTodayWeather(city);
      console.log("boom");
    }, [refreshInterval]);
  }, [refreshInterval]);

  const getWeatherIconSrc = () => {
    if (state.actualWeatherData !== undefined) {
      return `https://openweathermap.org/img/wn/${state.actualWeatherData.weather[0].icon}@2x.png`;
    }
    return;
  };

  const weatherIconSrc = getWeatherIconSrc();

  return [state, weatherActions, weatherIconSrc];
};

// Reducer
function weatherReducer(state, action) {
  // Destructure action
  const { type, payload } = action;

  switch (type) {
    // TODAY WEATHER
    case weatherConst.GET_TODAY_WEATHER_PENDING:
      return { ...state, isLoading: true };
    case weatherConst.GET_TODAY_WEATHER_REJECTED:
      return { ...state, isLoading: false, error: payload.message };
    case weatherConst.GET_TODAY_WEATHER_FULFILLED:
      return { ...state, isLoading: false, actualWeatherData: payload.data };
    default:
      return state;
  }
}

export default useWeather;
