import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootreducer from "./Appreducer/rootReducer";
const middleware= [thunk]
const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));

export default store;
