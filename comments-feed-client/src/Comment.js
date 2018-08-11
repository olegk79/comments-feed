import React from "react";


export default ({ comment }) => {
    //console.log(comment);
    const gravatarUrl = "https://www.gravatar.com/avatar/" + comment.img_hash;

    return <div style={{
        margin: "20px 20px 0 0",  
        overflow: "auto"
    }}>
        <div style={{ float: "left" }}><img alt="" height={50} width={50} src={gravatarUrl} style={{ display: "block" }} /></div>
        <div style={{ marginLeft: 20, float:"left" }}>
            <label style={{
                fontWeight: "bold",
                display:"block",
                marginTop: 5,
                fontSize: 16
            }}>{comment.email}</label>

            <label style={{ fontSize: 14, marginTop: 10, color:"grey" }}>{comment.message}</label><br />
            </div>
    </div>
}