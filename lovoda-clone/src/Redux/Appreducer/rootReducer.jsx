import {combineReducers} from "redux"
import reducers from "./reducer"
const rootreducer=combineReducers({
    products:reducers
})

export default rootreducer