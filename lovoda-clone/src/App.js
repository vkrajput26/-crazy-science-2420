import "./App.css";

import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as types from "./Redux/Auth/actionTypes"
import { onAuthStateChanged} from "firebase/auth"
import {auth} from "./firebase"  
import { Chat } from "./Pages/Chat";
import { WishList } from "./Pages/WishList";
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
  dispatch({type:types.USER_LOGIN_SUCCESS,payload:currentuser.email})
})
return ()=>{
  unsubscribe()
}
  },[])
  return (
    <div className="App">
 
      <Navbar/>
      <AllRoutes/>
      <WishList />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
