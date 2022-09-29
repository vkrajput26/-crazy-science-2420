import * as types from "./actionTypes"
import axios from "axios";
import{createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut,
    onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase"  
import { useToast } from "@chakra-ui/react";

export const login=(email,password)=>dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUEST});
    return signInWithEmailAndPassword(auth,email,password)
    // axios.post("https://reqres.in/api/login",payload)
    // .then((r)=>{
    //    return dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data.token})
    // }).catch((e)=>{
    //   return  dispatch({type:types.USER_LOGIN_FAILURE,payload:e})
    // })
};


export const loginAdmin=(payload)=>dispatch=>{
  
    dispatch({type:types.USER_LOGIN_REQUEST});
   return signInWithEmailAndPassword(payload,auth)
    // return axios.post("https://reqres.in/api/login",payload)
    // .then((r)=>{
    //    return dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data.token,admin:true})
    // }).catch((e)=>{
    //    return dispatch({type:types.USER_LOGIN_FAILURE,payload:e})
    // })
};

export const SignUp=(Fname,Lname, email,password)=>dispatch=>{
    
    // console.log(email)
    dispatch({type:types.USER_SIGNUP_REQUEST});
    return createUserWithEmailAndPassword(auth, email,password,Fname,Lname)
    // .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user)
    //    return dispatch({type:types.USER_SIGNUP_SUCCESS,payload:user.email})
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage)
    //     return dispatch({type:types.USER_SIGNUP_FAILURE,payload:errorMessage})
      
    //   });
   
}



export const LogOut=(payload)=>dispatch=>{
    dispatch({type:types.USER_LOGIN_FAILURE});
    return dispatch({type:types.USER_LOGIN_FAILURE})
}