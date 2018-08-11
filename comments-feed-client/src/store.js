import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import middlewares from "./middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

// DEBUG
//subscribing to the store so it's state will be logged on every dispatch
//store.subscribe(() => {
//    console.log(store.getState()) //logging the store's state
//});
//console.log(store.getState()); // log initial state

export default store;
