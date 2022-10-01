import {combineReducers} from "redux"
import {reducers as AppReducer} from "./reducer"
import {reducer as AuthReducer} from "../Auth/reducer";
import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer=combineReducers({
    products:AppReducer,
    AuthReducer,
    CartReducer,
   

})

export default rootreducer;