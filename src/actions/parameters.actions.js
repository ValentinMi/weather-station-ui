import * as parametersConst from "../consts/parameters.const";

export const switchMediaWikiImg = () => dispatch => {
  dispatch({
    type: parametersConst.SWITCH_MEDIA_WIKI_IMG
  });
};

export const switchBackgroundVideo = () => dispatch => {
  dispatch({
    type: parametersConst.SWITCH_BACKGROUND_VIDEO
  });
};

export const switchWeatherInfos = () => dispatch => {
  dispatch({
    type: parametersConst.SWITCH_WEATHER_INFOS
  });
};

export const switchSettingsVisibility = () => dispatch => {
  dispatch({
    type: parametersConst.SWITCH_SETTINGS_VISIBILITY
  });
};

export const changeRefreshInterval = nbr => dispatch => {
  dispatch({
    type: parametersConst.CHANGE_REFRESH_INTERVAL,
    payload: {
      nbr
    }
  });
};

export const changeCity = city => dispatch => {
  dispatch({
    type: parametersConst.CHANGE_CITY,
    payload: {
      city
    }
  });
};
