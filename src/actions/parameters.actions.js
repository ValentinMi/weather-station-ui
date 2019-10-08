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

export const openParameters = () => dispatch => {
  dispatch({
    type: parametersConst.OPEN_PARAMETERS
  });
};

export const closeParameters = () => dispatch => {
  dispatch({
    type: parametersConst.CLOSE_PARAMETERS
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
