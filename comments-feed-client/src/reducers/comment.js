import { combineReducers } from "redux";
import COMMENT_ACTIONS from "../actions/commentActions";

const postingNewComment = (state = false, action) => {
    switch (action.type) {
        case COMMENT_ACTIONS.POST_NEW_COMMENT:
            return true;
        case COMMENT_ACTIONS.NEW_COMMENT_POSTED:
            return false;
        default:
            return state;
    }
};



const comment = combineReducers({
    postingNewComment
});

export default comment;

//////////////////////////////Selectors///////////////////////////

export const getPostingNewCommentState = state => state.postingNewComment;

//export const getLastPostNewCommentResult = state => state.lastPostNewCommentResult;
