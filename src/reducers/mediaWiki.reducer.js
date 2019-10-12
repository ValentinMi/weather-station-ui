import * as mediaWikiConst from "../consts/mediaWiki.const";

const initState = {
  imgSrc: null,
  isLoading: true,
  error: null
};

function mediaWiki(state = initState, action) {
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

export default mediaWiki;
