/*dependencies*/
const express = require("express");
const router = express.Router();

/* utils */
const MongoDbAdapter = require("../utils/mongoDbAdapter");

/*route for fetching all feeds from Mongo DB*/
router.get("/fetchComments", (req, res) => {
    console.log("FETCH COMMENTS");
    const json = {
        success: true,
        message: ""
    };

    const mongoDb = new MongoDbAdapter();

    mongoDb.fetchAllComments()
        .then(fetchCommentsRes => {
            processFetchCommentsResult(json, res, fetchCommentsRes);
        })
        .catch(e => {
            processError(json, res);
        });
});

const processFetchCommentsResult = (json, res, fetchCommentsRes) => {
    if (fetchCommentsRes.success === true) {
        json.success = true;
        json.message = "fetched successfully";
        json.comments = fetchCommentsRes.comments;
    } else {
        json.success = false;
        json.message = fetchCommentsRes.e.message;
    }
    res.json(json);
}

const processError = (json, res) => {
    json.success = false;
    json.message = "Internal Server Error";
    res.json(json);
}


module.exports = router;