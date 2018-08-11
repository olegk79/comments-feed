/*dependencies*/
const express = require("express");
const router = express.Router();
const md5 = require("md5");

/* utils */
const MongoDbAdapter = require("../utils/mongoDbAdapter");

/* route for saving / updating users to Firebase */
router.post("/postComment", (req, res) => {

    console.log("post comment server", req.body);

    const json = {
        success: true,
        message: ""
    };

    const mongoDb = new MongoDbAdapter();

    // create actual comment object that will be inserted to DB (including email hash for gravatar!)
    let commentObj = Object.assign({ img_hash: md5(req.body.email) }, req.body);

    json.comment = commentObj;

    mongoDb.insertComment(commentObj)
        .then(insertFeedRes => {
            processInsertCommentRes(json, res, insertFeedRes);
        })
        .catch(e => {
            processError(json, res);
        });
});

const processInsertCommentRes = (json, res, insertCommentRes) => {
    if (insertCommentRes.success === true) {
        json.success = true;
        json.message = "saved in DB";
    } else {
        json.success = false;
        json.message = insertCommentRes.e.message;
    }
    res.json(json);
}

const processError = (json, res) => {
    json.success = false;
    json.message = "Internal Server Error";
    res.json(json);
}

module.exports = router;