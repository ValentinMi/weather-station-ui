import * as weatherConst from "../consts/weather.const";
import * as weatherAPI from "../api/weather.api";

export const getTodayWeather = city => dispatch => {
  dispatch({
    type: weatherConst.GET_TODAY_WEATHER,
    payload: weatherAPI.getTodayWeather(city)
  });
};
