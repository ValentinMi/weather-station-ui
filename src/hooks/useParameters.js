import thunk from "redux-thunk";
import useMiddleware from "react-usemiddleware";

import * as parametersConst from "../consts/parameters.const";
import {
  switchMediaWikiImg,
  switchBackgroundVideo,
  switchWeatherInfos,
  switchSettingsVisibility,
  changeRefreshInterval,
  changeCity
} from "../actions/parameters.actions";

import { defaultCity } from "../config/config.json";

const useParameters = () => {
  const initState = {
    city: defaultCity,
    isVisible: false,
    mediaWikiImg: true,
    backgroundVideo: true,
    weatherInfos: true,
    refreshInterval: 900000 // 15 mins
  };

  const [state, dispatch] = useMiddleware(parametersReducer, initState, [
    thunk
  ]);

  const parametersActions = {
    switchMediaWikiImg: () => dispatch(switchMediaWikiImg()),
    switchBackgroundVideo: () => dispatch(switchBackgroundVideo()),
    switchWeatherInfos: () => dispatch(switchWeatherInfos()),
    switchSettingsVisibility: () => dispatch(switchSettingsVisibility()),
    changeRefreshInterval: nbr => dispatch(changeRefreshInterval(nbr)),
    changeCity: city => dispatch(changeCity(city))
  };

  const parameters = [
    {
      type: "switch",
      name: "City image :",
      action: parametersActions.switchMediaWikiImg,
      isChecked: state.mediaWikiImg
    },
    {
      type: "switch",
      name: "Background video :",
      action: parametersActions.switchBackgroundVideo,
      isChecked: state.backgroundVideo
    },
    {
      type: "switch",
      name: "Weather infos :",
      action: parametersActions.switchWeatherInfos,
      isChecked: state.weatherInfos
    },
    {
      type: "value",
      name: "Refresh interval :",
      action: parametersActions.changeRefreshInterval,
      value: state.refreshInterval
    },
    {
      type: "text",
      name: "City :",
      action: parametersActions.changeCity,
      value: state.city
    }
  ];

  return [state, parameters, parametersActions];
};

function parametersReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case parametersConst.SWITCH_WEATHER_INFOS:
      return { ...state, weatherInfos: !state.weatherInfos };

    case parametersConst.SWITCH_BACKGROUND_VIDEO:
      return { ...state, backgroundVideo: !state.backgroundVideo };

    case parametersConst.SWITCH_MEDIA_WIKI_IMG:
      return { ...state, mediaWikiImg: !state.mediaWikiImg };

    case parametersConst.CHANGE_REFRESH_INTERVAL:
      return { ...state, refreshInterval: payload.nbr };

    case parametersConst.SWITCH_SETTINGS_VISIBILITY:
      return { ...state, isVisible: !state.isVisible };

    case parametersConst.CHANGE_CITY:
      return { ...state, city: payload.city };

    default:
      return state;
  }
}

export default useParameters;
