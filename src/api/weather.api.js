import http from "../httpService";
import { apiURL, apiKey } from "../config/config.json";

const weatherApiEndPoint = `${apiURL}/weather?q=`;
const apiKeyQuery = `&APPID=${apiKey}`;
const apiTimeZone = ",fr";
const apiUnitQuery = `&units=metric`;

export const getTodayWeather = city =>
  http.get(
    weatherApiEndPoint + city + apiTimeZone + apiUnitQuery + apiKeyQuery
  );
