const COMMENT_ACTIONS = {
    POST_NEW_COMMENT: "POST_NEW_COMMENT",
    NEW_COMMENT_POSTED: "NEW_COMMENT_POSTED",
    CLEAR_LAST_COMMENT_POST_DATA: "CLEAR_LAST_COMMENT_POST_DATA"
};

export const postNewComment = (comment) => ({
    type: COMMENT_ACTIONS.POST_NEW_COMMENT,
    comment
});

export const newCommentPosted = (comment) => ({
    type: COMMENT_ACTIONS.NEW_COMMENT_POSTED,
    comment
});

export const clearLastCommentPostData = () => ({
    type: COMMENT_ACTIONS.CLEAR_LAST_COMMENT_POST_DATA
});

export default COMMENT_ACTIONS;
