import React from "react";
import Comment from "./Comment";


export default ({
commentsList
}) => {
    return <div>
        {
            commentsList.length > 0 ? commentsList.map((comment, idx) => (<Comment key={idx} comment={comment} />)) :
                <label style={{ color: "grey", fontStyle:"italic" }}>No comments found</label>
        }
    </div>

};