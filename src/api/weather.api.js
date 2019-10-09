import http from "../httpService";
import { apiURL, apiKey } from "../config/config.json";

const actualWeatherApiEndPoint = `${apiURL}/weather?q=`;
const apiKeyQuery = `&APPID=${apiKey}`;
const apiTimeZone = ",fr";
const apiUnitQuery = `&units=metric`;

export const getTodayWeather = city =>
  http.get(
    actualWeatherApiEndPoint + city + apiTimeZone + apiUnitQuery + apiKeyQuery
  );

const forecastWeatherApiEndPoint = `${apiURL}/forecast?q=`;

export const getForecastWeather = city =>
  http.get(
    forecastWeatherApiEndPoint + city + apiTimeZone + apiUnitQuery + apiKeyQuery
  );
