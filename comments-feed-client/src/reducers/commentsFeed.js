import COMMENTS_FEED_ACTIONS from '../actions/commentsFeedActions';
import COMMENT_ACTIONS from "../actions/commentActions";
import { combineReducers } from "redux";

const comments = (state = {}, action) => {
    switch (action.type) {
        case COMMENTS_FEED_ACTIONS.COMMENTS_RECEIVED:
            return action.comments;
        case COMMENT_ACTIONS.NEW_COMMENT_POSTED:
            let newArr = [
                ...state,
                action.comment
            ];
            //console.log(newArr);
            return newArr;
        case COMMENTS_FEED_ACTIONS.CLEAR_COMMENTS:
            return {};
        default:
            return state;
    }
}

const isFetching = (state = true, action) => {
    switch (action.type) {
        case COMMENTS_FEED_ACTIONS.FETCH_COMMENTS:
            return true;
        case COMMENTS_FEED_ACTIONS.COMMENTS_RECEIVED:
            return false;
        case COMMENTS_FEED_ACTIONS.CLEAR_COMMENTS:
            return true;
        default:
            return state;
    }
}



const commentsFeed = combineReducers({
    comments, isFetching
});

export default commentsFeed;

///////////////SELECTORS//////////////////////////
export const getComments = state => state.comments;
export const getCommentsIsFetching = state => state.isFetching;
