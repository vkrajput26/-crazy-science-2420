import * as types from "./actionTypes";


const initialState={
    user:"",
    isAuth:false,
    isAuthLoading:false,
    isAuthError:false,
    isAdmin:false,
    ErrorMsg:""
}


export const reducer=(oldState=initialState,action)=>{
const {type,payload,admin}=action;

switch(type){
    case types.USER_LOGIN_REQUEST:{
        return{
            ...oldState,isAuthLoading:true
        }
    }
    case types.USER_LOGIN_SUCCESS:{
        return{
            ...oldState,isAuthLoading:false,isAuth:true, user:payload,isAdmin:admin||false
        }
    }

    case types.USER_LOGIN_FAILURE:{
        return{
            ...oldState,isAuthError:true,isAuth:false, isAuthLoading:false,user:"",isAdmin:false
        }
    }

    case types.USER_SIGNUP_REQUEST:{
        return{
            ...oldState,isAuthError:true,isAuth:false, isAuthLoading:true,user:"",isAdmin:false
        }
    }
    case types.USER_SIGNUP_SUCCESS:{
        return{
            ...oldState,isAuthLoading:false,user:payload,isAuthError:false
         
        }
    }
    case types.USER_SIGNUP_FAILURE:{
        return{
            ...oldState,isAuthError:true,isAuth:false, isAuthLoading:false,user:"",isAdmin:false,ErrorMsg:payload
        }
    }
    default:
        return oldState;
}
}