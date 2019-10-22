import * as weatherConst from "../consts/weather.const";

const initState = {
  actualWeatherData: undefined,
  forecastData: undefined,
  lastRefresh: undefined,
  isLoading: undefined,
  error: null
};

function weather(state = initState, action) {
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
        lastRefresh: `${new Date().getHours()}h${new Date().getMinutes()}`,
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

export default weather;
