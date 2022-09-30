import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAmazon, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { USER_LOGIN_SUCCESS } from "../Redux/Auth/actionTypes";
import {
  FacebookSignup,
  GoogleSignIn,
  login,
  passwordReset,
} from "../Redux/Auth/action";
import * as types from "../Redux/Auth/actionTypes";
import Footer from '../Components/Footer';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const HandleSubmit = () => {
    if (email === "" || password === "") {
      toast({
        title: `All details must be filled out!`,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(login(email, password))
        .then((userCredential) => {
          // Signed in
          const userDetails = userCredential.user;
          console.log(userDetails);
          toast({
            title: `Your Successfully Logged in,your current email is ${userDetails.email}  `,
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
          navigate("/account");
          return dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: userDetails.email,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          toast({
            title: `${errorMessage}  `,
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
          return dispatch({
            type: types.USER_LOGIN_FAILURE,
            payload: errorMessage,
          });
        });
    }
  };
  const signInWithGoogle = async () => {
    dispatch(GoogleSignIn())
      .then((userCredential) => {
        // Signed in
        const userDetails = userCredential.user;
        console.log(userDetails);
        toast({
          title: `Your Successfully Logged in,your current email is ${userDetails.email}  `,
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        navigate("/account");
        return dispatch({
          type: types.USER_LOGIN_SUCCESS,
          payload: userDetails.email,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast({
          title: `${errorMessage}  `,
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        return dispatch({
          type: types.USER_LOGIN_FAILURE,
          payload: errorMessage,
        });
      });
  };
  const ResetPassword = async () => {
    if (email === "") {
      toast({
        title: `Enter your email first`,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(passwordReset(email))
        .then(() => {
          // Password reset email sent!
          // ..
          toast({
            title: `We've sent you an email with a link to update your password.`,
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  const faceBookLogin = () => {
    // FacebookSignup
    dispatch(FacebookSignup())
      .then((userCredential) => {
        // Signed in
        const userDetails = userCredential.user;
        console.log(userDetails);
        toast({
          title: `Your Successfully Logged in,your current email is ${userDetails.email}  `,
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        navigate("/account");
        return dispatch({
          type: types.USER_LOGIN_SUCCESS,
          payload: userDetails.email,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast({
          title: `${errorMessage}  `,
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        return dispatch({
          type: types.USER_LOGIN_FAILURE,
          payload: errorMessage,
        });
      });
  };

  return (
    <>
    <Box mb={100} mt={10}>
      <Center>
        <VStack spacing={10} w="30%">
          <Box w="100%">
            <VStack spacing={5} w="100%">
              <Text mb={5} align="center" fontSize="40px">
                Login
              </Text>
              <Box w="100%" h="45px" border="2px solid #1877f2" cursor="pointer" onClick={faceBookLogin}>
                <Flex ml={10} h="100%" alignItems="center">
                  <FaFacebook color="#1877f2" size="30px" />
                  <Text color="#1877f2" ml={4}>
                    Continue with Facebook
                  </Text>
                </Flex>
              </Box>
              <Box
                onClick={signInWithGoogle}
                cursor="pointer"
                w="100%"
                h="45px"
                boxShadow="dark-lg"
              >
                <Flex ml={10} h="100%" alignItems="center">
                  <FcGoogle color="#1877f2" size="30px" />
                  <Text ml={20}>Google</Text>
                </Flex>
              </Box>
              <Box  onClick={signInWithGoogle}
                cursor="pointer" w="100%" h="45px" bg="#ffa100">
                <Flex ml={10} h="100%" alignItems="center">
                  <FaAmazon color="white" size="30px" />
                  <Text color="white" ml={20}>
                    Amazon
                  </Text>
                </Flex>
              </Box>
            </VStack>
          </Box>
          <Box w="100%">
            <FormControl>
              {/* <FormLabel>Email</FormLabel> */}

              <Input
                focusBorderColor="black"
                mt={5}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderRadius={1}
                placeholder="Email"
                color="black"
                h="45px"
              />
              <Input
                mt={5}
                focusBorderColor="black"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderRadius={1}
                placeholder="Password"
                color="black"
                h="45px"
              />
              <Flex onClick={ResetPassword} mt={2}>
                <Text
                  borderBottom="1px solid black"
                  _hover={{ color: "blue", borderBottom: "1px solid blue" }}
                >
                  Forgot your password?{" "}
                </Text>
              </Flex>

              <Input
                onClick={HandleSubmit}
                display="block"
                cursor="pointer"
                h={50}
                borderRadius={1}
                m="auto"
                type="submit"
                bg="black"
                w="30%"
                mt={8}
                color="white"
                value="Sign in"
              />

              <Flex justifyContent="center" mt={5}>
                <Link to="/signup">
                  {" "}
                  <Text
                    borderBottom="1px solid black"
                    _hover={{ color: "blue", borderBottom: "1px solid blue" }}
                  >
                    Create account{" "}
                  </Text>{" "}
                </Link>
              </Flex>
            </FormControl>
          </Box>
        </VStack>
      </Center>
    </Box>

    </>
  );






}

