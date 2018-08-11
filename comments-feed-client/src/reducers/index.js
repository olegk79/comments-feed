import { combineReducers } from "redux";

// reducers
import comment from "./comment";
import commentsFeed from "./commentsFeed";

//reducer selectors
import * as fromComment from "./comment";
import * as fromCommentsFeed from "./commentsFeed";

const reducers = combineReducers({
    comment,
    commentsFeed
});

export default reducers;

///////////////////////////////////SELECTORS/////////////////////////////////////////////////////////////


// comments feed
export const getComments = state => fromCommentsFeed.getComments(state.commentsFeed);
export const getCommentsIsFetching = state => fromCommentsFeed.getCommentsIsFetching(state.commentsFeed);

// comment
export const getPostingNewCommentState = state => fromComment.getPostingNewCommentState(state.comment);
//export const getLastPostNewCommentResult = state => fromComment.getLastPostNewCommentResult(state.comment);

