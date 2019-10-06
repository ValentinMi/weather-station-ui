import { useEffect } from "react";

import * as weatherConst from "../consts/weather.const";
import { getTodayWeather } from "../actions/weather.actions";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import useMiddleware from "react-usemiddleware";

import { defaultCity } from "../config/config.json";

export const useWeather = () => {
  const initState = {
    city: defaultCity,
    selectedPeriod: "today",
    todayData: undefined,
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

  // Destructure state
  const { city, selectedPeriod } = state;

  useEffect(() => {
    switch (selectedPeriod) {
      case "today":
        weatherActions.getTodayWeather(city);
        break;

      default:
        throw new Error("Unknown selected period");
    }
  }, [city, selectedPeriod]);

  return [state, weatherActions];
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
      return { ...state, isLoading: false, todayData: payload.data };

    default:
      return state;
  }
}
