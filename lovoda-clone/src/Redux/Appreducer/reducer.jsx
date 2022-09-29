
import * as types from "./actiontype"


const initialState={
    products:[],
    product:{},
    loading:true
}


const reducers=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCT:
            case types.GET_GRID:
            return{
                ...state,
                products:action.payload,
                loading:false
            }
        
        default:
            return state
    }
   
}
export default reducers;