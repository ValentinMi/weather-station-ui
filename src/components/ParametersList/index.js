import React from "react";
import { connect } from "react-redux";

import Parameter from "../Parameter";

import {
  switchMediaWikiImg,
  switchBackgroundVideo,
  switchWeatherInfos,
  switchSettingsVisibility,
  changeRefreshInterval,
  changeCity,
  changeSelectedPeriod
} from "../../actions/settings.actions";

import "./index.scss";

const ParametersList = ({ settings, actions }) => {
  const parameters = [
    {
      type: "switch",
      name: "City image :",
      action: actions.switchMediaWikiImg,
      isChecked: settings.mediaWikiImg
    },
    {
      type: "switch",
      name: "Background video :",
      action: actions.switchBackgroundVideo,
      isChecked: settings.backgroundVideo
    },
    {
      type: "switch",
      name: "Weather infos :",
      action: actions.switchWeatherInfos,
      isChecked: settings.weatherInfos
    },
    {
      type: "value",
      name: "Refresh interval :",
      action: actions.changeRefreshInterval,
      value: settings.refreshInterval
    },
    {
      type: "text",
      name: "City :",
      action: actions.changeCity,
      value: settings.city
    }
  ];

  return (
    <div className="params-list">
      {parameters.map(param => (
        <Parameter
          type={param.type}
          name={param.name}
          changeParamAction={param.action}
          key={param.name}
          isChecked={param.isChecked}
          defaultValue={param.value}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  actions: {
    switchMediaWikiImg: () => dispatch(switchMediaWikiImg()),
    switchBackgroundVideo: () => dispatch(switchBackgroundVideo()),
    switchWeatherInfos: () => dispatch(switchWeatherInfos()),
    switchSettingsVisibility: () => dispatch(switchSettingsVisibility()),
    changeRefreshInterval: nbr => dispatch(changeRefreshInterval(nbr)),
    changeCity: city => dispatch(changeCity(city)),
    changeSelectedPeriod: period => dispatch(changeSelectedPeriod(period))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParametersList);
