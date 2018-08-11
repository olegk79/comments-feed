import COMMENT_ACTIONS, { newCommentPosted } from "../actions/commentActions";
import postComment from "../services/post-comment";


/*a redux middleware for posting new comment 
and updating the store with the received data (we need Gravatar hash)*/
const postCommentMiddleware = store => next => action => {
    if (action.type === COMMENT_ACTIONS.POST_NEW_COMMENT) {
        //console.log("postCommentMiddleware", action);
        postComment(action.comment).then(result => {
            //console.log("post comment result", result);
            if (result.data.success === true) {
                store.dispatch(newCommentPosted(result.data.comment));
            } else {
                console.log("ERROR");
            }
        });
    }
    return next(action);
};

export default postCommentMiddleware;
