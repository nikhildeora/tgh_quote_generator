import { RANDOM_QUOTE, BOOKMARK_QUOTE, FETCH_ALL_TAGS, DELETE_BOOKMARK_QUOTE } from "./actionTypes";

const initValue = {
    random : {},
    tags : [],
    bookmarks : []                
}

export function Reducer(state=initValue, action){
   switch(action.type){
    case RANDOM_QUOTE : {
        return {...state, random : {...action.payload,isBookmark:false}};
    }
    case BOOKMARK_QUOTE : {
        return {...state, random : {...state.random, isBookmark : true} , bookmarks : [...state.bookmarks, {...action.payload, isBookmark : true}]};
    }
    case FETCH_ALL_TAGS : {
        return {...state, tags : [...action.payload]};
    }
    case DELETE_BOOKMARK_QUOTE : {
        const bookmarkArr = state.bookmarks.filter(item=>{
            return item._id !== action.payload;
        })
        // checking if current random quote is equal to what i am deleting in bookmark section , i will also remove bookmark from here 
        if(state.random._id===action.payload){
            return {...state, random : {...state.random, isBookmark:false}, bookmarks : bookmarkArr}
        }else{
            return {...state, bookmarks : bookmarkArr};
        }
    }
    default : {
        return state;
    }
   }
}