import * as weatherConst from "../consts/weather.const";
import * as weatherAPI from "../api/weather.api";

export const fetchWeatherData = city => dispatch => {
  dispatch({
    type: weatherConst.GET_TODAY_WEATHER,
    payload: weatherAPI.getTodayWeather(city)
  });

  dispatch({
    type: weatherConst.GET_FORECAST_WEATHER,
    payload: weatherAPI.getForecastWeather(city)
  });
};
