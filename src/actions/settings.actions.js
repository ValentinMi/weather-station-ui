import * as settingsConst from "../consts/settings.const";

export const switchMediaWikiImg = () => dispatch => {
  dispatch({
    type: settingsConst.SWITCH_MEDIA_WIKI_IMG
  });
};

export const switchBackgroundVideo = () => dispatch => {
  dispatch({
    type: settingsConst.SWITCH_BACKGROUND_VIDEO
  });
};

export const switchWeatherInfos = () => dispatch => {
  dispatch({
    type: settingsConst.SWITCH_WEATHER_INFOS
  });
};

export const switchSettingsVisibility = () => dispatch => {
  dispatch({
    type: settingsConst.SWITCH_SETTINGS_VISIBILITY
  });
};

export const changeRefreshInterval = nbr => dispatch => {
  dispatch({
    type: settingsConst.CHANGE_REFRESH_INTERVAL,
    payload: {
      nbr
    }
  });
};

export const changeCity = city => dispatch => {
  dispatch({
    type: settingsConst.CHANGE_CITY,
    payload: {
      city
    }
  });
};

export const changeSelectedPeriod = period => dispatch => {
  dispatch({
    type: settingsConst.CHANGE_SELECTED_PERIOD,
    payload: {
      period
    }
  });
};
