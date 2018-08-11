/*require routes*/

const routesList = [
    "postComment",
    "fetchComments"
];

const routesArr = [];

routesList.forEach(route => {
    routesArr.push(require(`./${route}`));
});


module.exports = routesArr;