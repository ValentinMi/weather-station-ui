import { useEffect } from "react";

import * as weatherConst from "../consts/weather.const";
import {
  getTodayWeather,
  getForecastWeather
} from "../actions/weather.actions";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import useMiddleware from "react-usemiddleware";

const useWeather = (refreshInterval, city) => {
  const initState = {
    selectedPeriod: "today",
    actualWeatherData: undefined,
    forecastData: undefined,
    isLoading: true,
    error: null
  };

  const [state, dispatch] = useMiddleware(weatherReducer, initState, [
    promise,
    thunk
  ]);

  // Map actions in object
  const weatherActions = {
    getTodayWeather: city => dispatch(getTodayWeather(city)),
    getForecastWeather: city => dispatch(getForecastWeather(city))
  };

  const fetchData = () => {
    weatherActions.getTodayWeather(city);
    weatherActions.getForecastWeather(city);
  };

  // Refresh weather on period change
  useEffect(() => {
    switch (state.selectedPeriod) {
      case "today":
        return fetchData();

      default:
        throw new Error("Unknown selected period");
    }
  }, [city, state.selectedPeriod]);

  // Interval refresh
  useEffect(() => {
    setInterval(() => {
      return () => fetchData();
    }, [refreshInterval]);
  }, [refreshInterval]);

  const getWeatherIconSrc = () => {
    if (state.actualWeatherData !== undefined) {
      return `https://openweathermap.org/img/wn/${state.actualWeatherData.weather[0].icon}@2x.png`;
    }
  };

  const getForecastIconSrc = forecastIndex => {
    if (state.forecastData !== undefined) {
      return `https://openweathermap.org/img/wn/${state.forecastData.list[forecastIndex].weather[0].icon}@2x.png`;
    }
  };

  const icons = {
    actualWeatherIconSrc: getWeatherIconSrc(state.actualWeatherData),
    getForecastIconSrc
  };

  return [state, fetchData, icons];
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
      return {
        ...state,
        isLoading: false,
        actualWeatherData: payload.data,
        error: null
      };
    case weatherConst.GET_FORECAST_WEATHER_PENDING:
      return { ...state, isLoading: true };
    case weatherConst.GET_FORECAST_WEATHER_REJECTED:
      return { ...state, isLoading: false, error: payload.message };
    case weatherConst.GET_FORECAST_WEATHER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        forecastData: payload.data,
        error: null
      };
    default:
      return { ...state };
  }
}

export default useWeather;
