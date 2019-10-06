import * as weatherConst from "../consts/weather.const";
import * as weatherApi from "../api/weather.api";

export const getTodayWeather = city => dispatch => {
  dispatch({
    type: weatherConst.GET_TODAY_WEATHER,
    payload: weatherApi.getTodayWeather(city)
  });
};
