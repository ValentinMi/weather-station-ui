import { useEffect } from "react";

import * as mediaWikiConst from "../consts/mediaWiki.const";
import { getCityImg } from "../actions/mediaWiki.actions";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import useMiddleware from "react-usemiddleware";

const useMediaWiki = city => {
  const initState = {
    imgSrc: null,
    isLoading: true,
    error: null
  };

  const [state, dispatch] = useMiddleware(mediaWikiReducer, initState, [
    promise,
    thunk
  ]);

  // Map actions in object
  const mediaWikiActions = {
    getCityImg: city => dispatch(getCityImg(city))
  };

  useEffect(() => {
    mediaWikiActions.getCityImg(city);
  }, [city]);

  return [state, mediaWikiActions];
};

function mediaWikiReducer(state, action) {
  // Destructure action
  const { type, payload } = action;

  switch (type) {
    case mediaWikiConst.GET_CITY_IMG_PENDING:
      return { ...state, isLoading: true };
    case mediaWikiConst.GET_CITY_IMG_REJECTED:
      return { ...state, isLoading: false, error: payload.message };
    case mediaWikiConst.GET_CITY_IMG_FULFILLED:
      // Transform pages object to array because of unknown key
      let pages = Object.values(payload.data.query.pages);
      // If page don't have main img => return
      if (pages[0].original === undefined)
        return { ...state, isLoading: false };
      // Else set imgSrc
      let src = pages[0].original.source;
      return { ...state, isLoading: false, imgSrc: src };
    default:
      return state;
  }
}

export default useMediaWiki;
