import { useState } from "react";
import { axios } from "axios";
import { toast } from "react-toastify";

import { apiURL, apiKey } from "../config/config.json";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Axios config
  axios.defaults.baseURL = apiURL;
  axios.defaults.headers.common["APPID"] = apiKey;

  axios.interceptors.response.use(null, error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      toast.error("An unexpected error occured");
    }

    return Promise.reject(error);
  });

  // Get method
  const get = async apiEndPoint => {
    setIsLoading(true);
    const { data } = await axios.get(apiEndPoint);
    setIsLoading(false);
    return data;
  };

  return [get, isLoading];
};
