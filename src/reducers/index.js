import { combineReducers } from "redux";
import weather from "../reducers/weather.reducer";
import settings from "../reducers/settings.reducer";
import mediaWiki from "../reducers/mediaWiki.reducer";

export default combineReducers({
  weather,
  settings,
  mediaWiki
});
