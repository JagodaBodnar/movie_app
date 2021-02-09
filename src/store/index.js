import { createStore, applyMiddleware } from "redux";
import moviesReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise";
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStoreWithMiddleware(moviesReducer, composeWithDevTools());

export default store;
