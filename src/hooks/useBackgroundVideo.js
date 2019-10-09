import React, { useEffect, useState } from "react";

import Player from "react-background-video-player";

import clearSkyVideo from "../assets/videos/clear.mp4";
import fewCloudsVideo from "../assets/videos/fewClouds.mp4";
import thunderStormVideo from "../assets/videos/storm.mp4";
import overcastCloudsVideo from "../assets/videos/overcast.mp4";
import scatteredCloudsVideo from "../assets/videos/scattered.mp4";
import rainVideo from "../assets/videos/rain.mp4";
import showerRainVideo from "../assets/videos/showerRain.mp4";
import nightVideo from "../assets/videos/night.mp4";
import nightRainVideo from "../assets/videos/nightRain.mp4";

const useBackgroundVideo = actualWeatherData => {
  const [videoSrc, setVideoSrc] = useState();

  useEffect(() => {
    if (actualWeatherData !== undefined) {
      setVideoSrc(getVideoSrc(actualWeatherData.weather[0].icon));
    }
  }, [actualWeatherData]);

  const BackgroundVideo = () => (
    <Player src={showerRainVideo} containerWidth={800} containerHeight={480} />
  );

  return [BackgroundVideo];
};

function getVideoSrc(iconId) {
  switch (iconId) {
    case "01d":
      return clearSkyVideo;
    case "02d":
      return fewCloudsVideo;
    case "03d":
      return overcastCloudsVideo;
    case "04d":
      return scatteredCloudsVideo;
    case "09d":
      return showerRainVideo;
    case "10d":
      return rainVideo;
    case "11d":
      return thunderStormVideo;
    // Night
    case "09n":
      return nightRainVideo;
    case "10n":
      return nightRainVideo;
    default:
      return nightVideo;
  }
}

export default useBackgroundVideo;

//   day: {
//     clearSky: "01d",
//     fewClouds: "02d",
//     overcastClouds: "03d",
//     scatteredClouds: "04d",
//     showerRain: "09d",
//     rain: "10d",
//     thunderStorm: "11d",
//     snow: "13d",
//     mist: "50d"
//   },
//   night: {
//     clearSky: "01n",
//     fewClouds: "02n",
//     scatteredClouds: "03n",
//     overcastClouds: "04n",
//     showerRain: "09n",
//     rain: "10n",
//     thunderStorm: "11n",
//     snow: "13n",
//     mist: "50n"
//   }
