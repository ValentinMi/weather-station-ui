import axios from "axios";
import { toast } from "react-toastify";

import { apiURL, apiKey } from "./config/config.json";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // logger.log();
    toast.error("An unexpected error occured");
  }

  return Promise.reject(error);
});

function setAppId(appId) {
  axios.defaults.baseURL = apiURL;
  axios.defaults.headers.common["APPID"] = apiKey;
}

export default {
  get: axios.get,
  setAppId
};
