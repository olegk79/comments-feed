const express = require("express");
//const path = require("path");
//const favicon = require("serve-favicon");
//const logger = require("morgan");
//const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");



/*require routes*/
const routes = require("./routes/index");

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(routes);

//// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error("Not Found");
//    err.status = 404;
//    next(err);
//});


//// error handlers

//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.render("error", {
//        message: err.message,
//        error: err
//    });
//});

console.log("server started");

module.exports = app.listen(3001);