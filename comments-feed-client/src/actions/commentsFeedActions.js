const COMMENTS_FEED_ACTIONS = {
    FETCH_COMMENTS: 'FETCH_COMMENTS',
    COMMENTS_RECEIVED: 'COMMENTS_RECEIVED',
    //POST_COMMENT: 'POST_COMMENT',
   // COMMENT_POSTED: 'COMMENT_POSTED',
    CLEAR_COMMENTS: 'CLEAR_COMMENTS'
};

export const fetchComments = () => ({
    type: COMMENTS_FEED_ACTIONS.FETCH_COMMENTS
});

export const commentsReceived = (comments) => ({
    type: COMMENTS_FEED_ACTIONS.COMMENTS_RECEIVED,
    comments
});

export const clearComments = () => ({
    type: COMMENTS_FEED_ACTIONS.CLEAR_COMMENTS
});




export default COMMENTS_FEED_ACTIONS;