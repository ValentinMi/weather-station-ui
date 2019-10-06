import http from "../httpService";
import { apiURL, apiKey } from "../config/config.json";

const weatherApiEndPoint = `${apiURL}/weather?q=`;
const apiKeyQuery = `&APPID=${apiKey}`;
const apiUnitQuery = `&units=metric`;

export const getTodayWeather = city =>
  http.get(weatherApiEndPoint + city + apiUnitQuery + apiKeyQuery);
