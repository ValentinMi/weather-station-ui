import http from "../httpService";

const apiURL =
  "https://fr.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&origin=*&titles=";

export const getCityImg = city => http.get(apiURL + city);
