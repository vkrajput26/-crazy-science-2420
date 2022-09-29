import { legacy_createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";

import rootreducer from "./Appreducer/rootReducer";
const middleware= [thunk]
const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));

export default store;



// import {legacy_createStore,applyMiddleware} from "redux";
// import {reducer as AuthReducer} from "./Auth/reducer";
// // import {reducer as AppReducer} from "./App/reducer";
// import thunk from "redux-thunk"
// // const rootReducer=combineReducers({AppReducer,AuthReducer})

//  const store=legacy_createStore(AuthReducer,applyMiddleware(thunk))


//  export {store}
