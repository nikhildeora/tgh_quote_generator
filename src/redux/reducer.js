import { RANDOM_QUOTE, BOOKMARK_QUOTE, FETCH_ALL_TAGS } from "./actionTypes";

const initValue = {
    random : {},
    tags : [],
    bookmarks : []                
}

export function Reducer(state=initValue, action){
   switch(action.type){
    case RANDOM_QUOTE : {
        return {...state, random : {...action.payload}};
    }
    case BOOKMARK_QUOTE : {
        return {...state, bookmarks : [...state.bookmarks, ...action.payload]};
    }
    case FETCH_ALL_TAGS : {
        return {...state, tags : [...action.payload]};
    }
    default : {
        return state;
    }
   }
}