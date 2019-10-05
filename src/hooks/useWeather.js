import useThunkReducer from "react-hook-thunk-reducer";
import * as weatherConst from "../consts/weather.const";

import { getTodayWeather } from "../actions/weather.actions";

import { defaultCity } from "../config/config.json";

export const useWeather = () => {
  const initState = {
    city: defaultCity,
    todayData: undefined,
    nextDaysData: undefined,
    isLoading: false
  };

  const [state, dispatch] = useThunkReducer(weatherReducer, initState);

  const actions = {
    getTodayWeather: city => dispatch(getTodayWeather(city))
  };

  return [state, actions];
};

// Reducer
function weatherReducer(state, action) {
  // Destructure action
  const { type, payload } = action;

  switch (type) {
    case weatherConst.GET_TODAY_WEATHER:
      return { ...state, todayData: payload.data };

    default:
      return state;
  }
}
