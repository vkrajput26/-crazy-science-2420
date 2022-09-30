import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react';
import { HiOutlineUser } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut } from '../Redux/Auth/action';
import * as types from "../Redux/Auth/actionTypes"

export const Account = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const {user,isAuthError,ErrorMsg}=useSelector(state=>{
    return {user:state.AuthReducer.user,ErrorMsg:state.AuthReducer.ErrorMsg,isAuthError:state.AuthReducer.isAuthError}
  })
      // console.log("amol",user)

      const signOutBtn=()=>{
dispatch(LogOut()).then(r=>{
  dispatch({type:types.USER_LOGIN_FAILURE})
  navigate("/")
})
      }
  return (
   <Box w="94%"  m="auto" mb="200px">
<Flex justifyContent="space-evenly">
  <Box mt={10} w="40%">
  <Text  align="left" fontSize="40px">
    Account
</Text>
<Flex onClick={signOutBtn} alignItems="center" cursor="pointer"><HiOutlineUser size="20px" /><Text fontSize="15px"  _hover={{color:"blue"}} textDecoration="underline" ml={1}>Log out</Text></Flex>
<Text mt={10} align="left" fontSize="30px">
    Order history
</Text>
<Text ml={1} align="left" fontSize="15px">
You haven't placed any orders yet.
</Text>
  </Box>
  <Box pl="300px" w="40%"  >
    <Text mt="50%" fontSize="25px">Account details
</Text>
<Text ml="55px"  fontSize="15px" align="left">{user && user}</Text>
<Text ml="55px"  fontSize="15px" align="left">India</Text>
<Text ml="55px" mt={10} textDecoration="underline" cursor="pointer" fontSize="15px" align="left" _hover={{color:"blue"}} >View addresses(1)</Text>
  </Box>
</Flex>

   </Box>
  )
}
