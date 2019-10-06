import * as mediaWikiConst from "../consts/mediaWiki.const";
import * as mediaWikiAPI from "../api/mediaWiki.api";

export const getCityImg = city => dispatch => {
  dispatch({
    type: mediaWikiConst.GET_CITY_IMG,
    payload: mediaWikiAPI.getCityImg(city)
  });
};
