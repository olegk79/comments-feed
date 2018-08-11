import COMMENTS_FEED_ACTIONS, { commentsReceived } from "../actions/commentsFeedActions";
import fetchComments from "../services/fetch-comments";


/*a redux middleware for fetching the existing comments 
and updating the store with the received data*/
const fetchCommentsMiddleware = store => next => action => {
    if (action.type === COMMENTS_FEED_ACTIONS.FETCH_COMMENTS) {
        fetchComments().then(result => {
            //console.log("comments result", result);
            if (result.data.success === true) {
                store.dispatch(commentsReceived(result.data.comments));
            } else {
                console.log("ERROR");
            }
        });
    }
    return next(action);
};

export default fetchCommentsMiddleware;
