import { RANDOM_QUOTE, BOOKMARK_QUOTE, FETCH_ALL_TAGS } from "./actionTypes";
import { fetch_all_tags_api, generate_random_quote_api } from "./api";

export const funGenerateRandomQoute = (tags="") => async (dispatch) => {
    try {
        let quoteRes = await generate_random_quote_api(tags);
        console.log("quoteRes",quoteRes);
        dispatch({type: RANDOM_QUOTE, payload: quoteRes});
    } catch (error) {
        console.log("error while fetching random quote",error);
    }
}

export const funBookmarkQuote = (quote_body) => {
    return {type:BOOKMARK_QUOTE, payload : quote_body};
};

export const funFetchAllTags = () => async (dispatch) => {
    try {
        let allTags = await fetch_all_tags_api();
        let tagArr = allTags.map(tag=>(tag.slug));
        console.log("tagArr",tagArr);
        dispatch({type: FETCH_ALL_TAGS, payload : tagArr});
    } catch (error) {
        console.log("error while fetch all tags",error);
    }
}

