import {combineReducers} from "redux"
import {reducers as AppReducer} from "./reducer"
import {reducer as AuthReducer} from "../Auth/reducer";
const rootreducer=combineReducers({
    products:AppReducer,
    AuthReducer

})

export default rootreducer;