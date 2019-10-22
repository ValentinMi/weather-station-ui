import React, { useEffect } from "react";
import { connect } from "react-redux";

import { switchSettingsVisibility } from "../../actions/settings.actions";
import { fetchWeatherData } from "../../actions/weather.actions";
import { getCityImg } from "../../actions/mediaWiki.actions";

import useBackgroundVideo from "../../hooks/useBackgroundVideo";

import InfosCard from "../../components/InfosCard";
import TodayForecast from "../../components/TodayForecast";
import Spinner from "../../components/Spinner/index";
import ParametersList from "../../components/ParametersList";

import settingsIcon from "../../assets/settings.png";

import "./index.scss";

const MainBoard = ({ weather, mediaWiki, settings, actions }) => {
  // Custom hooks
  const [BackgroundVideo] = useBackgroundVideo(weather.actualWeatherData);

  useEffect(() => {
    actions.fetchWeatherData(settings.city);
    actions.getCityImg(settings.city);
    // eslint-disable-next-line
  }, [settings.city, settings.selectedPeriod]);

  return (
    <>
      {settings.backgroundVideo && <BackgroundVideo />}
      <div className="container-fluid board">
        {// Display spinner on loading
        weather.isLoading || mediaWiki.isLoading ? (
          <Spinner isBackgroundSpinner={true} />
        ) : (
          <>
            {weather.error && (
              <span className="error-message">City not found</span>
            )}
            <img
              className="settingsIcon"
              src={settingsIcon}
              alt="Settings"
              onClick={() => actions.switchSettingsVisibility()}
            />
            <div className="row">
              <div className="col-md-6">
                {settings.weatherInfos && (
                  <InfosCard
                    data={weather.actualWeatherData}
                    background={settings.mediaWikiImg && mediaWiki.imgSrc}
                    refreshWeather={() =>
                      actions.fetchWeatherData(settings.city)
                    }
                  />
                )}
              </div>
              <div className="col-md-6 right-col">
                {settings.weatherInfos && !settings.isVisible && (
                  <TodayForecast data={weather.forecastData} />
                )}
                {settings.isVisible && <ParametersList />}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  weather: state.weather,
  settings: state.settings,
  mediaWiki: state.mediaWiki
});

const mapDispatchToProps = dispatch => ({
  actions: {
    // Weather
    fetchWeatherData: city => dispatch(fetchWeatherData(city)),
    // Settings
    switchSettingsVisibility: () => dispatch(switchSettingsVisibility()),
    // MediaWiki
    getCityImg: city => dispatch(getCityImg(city))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBoard);
