import * as settingsConst from "../consts/settings.const";

import { defaultCity } from "../config/config.json";

const initState = {
  city: defaultCity,
  selectedPeriod: "today",
  isVisible: false,
  mediaWikiImg: true,
  backgroundVideo: true,
  weatherInfos: true,
  refreshInterval: 900000 // 15 mins
};

function settings(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case settingsConst.SWITCH_WEATHER_INFOS:
      return { ...state, weatherInfos: !state.weatherInfos };

    case settingsConst.SWITCH_BACKGROUND_VIDEO:
      return { ...state, backgroundVideo: !state.backgroundVideo };

    case settingsConst.SWITCH_MEDIA_WIKI_IMG:
      return { ...state, mediaWikiImg: !state.mediaWikiImg };

    case settingsConst.CHANGE_REFRESH_INTERVAL:
      return { ...state, refreshInterval: payload.nbr };

    case settingsConst.SWITCH_SETTINGS_VISIBILITY:
      return { ...state, isVisible: !state.isVisible };

    case settingsConst.CHANGE_CITY:
      return { ...state, city: payload.city };

    case settingsConst.CHANGE_SELECTED_PERIOD:
      return { ...state, selectedPeriod: payload.period };

    default:
      return state;
  }
}

export default settings;
