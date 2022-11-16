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
import { async } from "@firebase/util";
import React, { useState } from "react";
import { FaAmazon, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FacebookSignup, GoogleSignIn, SignUp } from "../Redux/Auth/action";
import {
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
} from "../Redux/Auth/actionTypes";
import * as types from "../Redux/Auth/actionTypes";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../App.css";

import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export const Signup = () => {
  // const [input, setInput] = useState(initialData)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const submitUser = async (e) => {
    e.preventDefault();
    if (Fname === "" || Lname === "" || email === "" || password === "") {
      toast({
        title: `All details must be filled out!`,
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(SignUp(Fname, Lname, email, password))
        .then((userCredential) => {
          // Signed in
          const userDetails = userCredential.user;
          // console.log(user)
          toast({
            title: `Your account has been created,your current email is ${userDetails.email}  `,
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
          navigate("/login");
          return dispatch({
            type: types.USER_SIGNUP_SUCCESS,
            payload: userDetails.email,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage)
          toast({
            title: `${errorMessage}  `,
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
          return dispatch({
            type: types.USER_SIGNUP_FAILURE,
            payload: errorMessage,
          });
        });
    }
  };

  const faceBookLogin = () => {
    // FacebookSignup
    dispatch(FacebookSignup())
      .then((userCredential) => {
        // Signed in
        const userDetails = userCredential.user;
        // console.log(userDetails);
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
        // console.log(errorMessage);
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
  const signInWithGoogle = async () => {
    dispatch(GoogleSignIn())
      .then((userCredential) => {
        // Signed in
        const userDetails = userCredential.user;
        // console.log(userDetails);
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
        // console.log(errorMessage);
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
      <Desktop>
        <Box mb={100} mt={10}>
          <Center>
            <VStack spacing={10} w="30%">
              <Box w="100%">
                <VStack spacing={5} w="100%">
                  <Text mb={5} align="center" fontSize="40px">
                    Create account
                  </Text>
                  <Box
                    cursor="pointer"
                    onClick={faceBookLogin}
                    w="100%"
                    h="45px"
                    border="2px solid #1877f2"
                  >
                    <Flex ml={10} h="100%" alignItems="center">
                      <FaFacebook color="#1877f2" size="30px" />
                      <Text color="#1877f2" ml={4}>
                        Continue with Facebook
                      </Text>
                    </Flex>
                  </Box>
                  <Box
                    w="100%"
                    h="45px"
                    boxShadow="dark-lg"
                    cursor="pointer"
                    onClick={signInWithGoogle}
                  >
                    <Flex ml={10} h="100%" alignItems="center">
                      <FcGoogle color="#1877f2" size="30px" />
                      <Text ml={20}>Google</Text>
                    </Flex>
                  </Box>
                  <Box
                    w="100%"
                    h="45px"
                    bg="#ffa100"
                    cursor="pointer"
                    onClick={signInWithGoogle}
                  >
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
                <FormControl onSubmit={submitUser}>
                  {/* <FormLabel>Email</FormLabel> */}
                  <Input
                    focusBorderColor="black"
                    type="text"
                    value={Fname}
                    onChange={(e) => setFname(e.target.value)}
                    borderRadius={1}
                    placeholder="First name"
                    color="black"
                    h="45px"
                    name="first_name"
                  />
                  <Input
                    focusBorderColor="black"
                    mt={5}
                    name="last_name"
                    type="text"
                    value={Lname}
                    onChange={(e) => setLname(e.target.value)}
                    borderRadius={1}
                    placeholder="Last name"
                    color="black"
                    h="45px"
                  />
                  <Input
                    focusBorderColor="black"
                    mt={5}
                    name="email"
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
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    borderRadius={1}
                    placeholder="Password"
                    color="black"
                    h="45px"
                  />
                  <Flex mt={3} alignItems="center">
                    <Text align="left" display="inline-block">
                      {" "}
                      Subscribe for Newsletter
                    </Text>
                    <Checkbox
                      ml={2}
                      border="1px solid black"
                      borderRadius={3}
                      colorScheme="blue"
                    />
                  </Flex>

                  <Input
                    className="create_btn"
                    onClick={submitUser}
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
                    value="Create"
                  />

                  <Flex justifyContent="center" mt={5}>
                    <Text>
                      Already have an account?
                      <Link to="/login">
                        <Text
                          display="inline"
                          borderBottom="1px solid black"
                          _hover={{
                            color: "blue",
                            borderBottom: "1px solid blue",
                          }}
                        >
                          {" "}
                          Log in{" "}
                        </Text>
                      </Link>
                    </Text>
                  </Flex>
                </FormControl>
              </Box>
            </VStack>
          </Center>
        </Box>
      </Desktop>
      <Tablet>
        <Box mb={100} mt={10}>
          <Center>
            <VStack spacing={10} w="60%">
              <Box w="100%">
                <VStack spacing={5} w="100%">
                  <Text mb={5} align="center" fontSize="30px">
                    Create account
                  </Text>
                  <Box
                    cursor="pointer"
                    onClick={faceBookLogin}
                    w="100%"
                    h="45px"
                    border="2px solid #1877f2"
                  >
                    <Flex ml={10} h="100%" alignItems="center">
                      <FaFacebook color="#1877f2" size="30px" />
                      <Text color="#1877f2" ml={4}>
                        Continue with Facebook
                      </Text>
                    </Flex>
                  </Box>
                  <Box
                    w="100%"
                    h="45px"
                    boxShadow="dark-lg"
                    cursor="pointer"
                    onClick={signInWithGoogle}
                  >
                    <Flex ml={10} h="100%" alignItems="center">
                      <FcGoogle color="#1877f2" size="30px" />
                      <Text ml={10}>Google</Text>
                    </Flex>
                  </Box>
                  <Box
                    w="100%"
                    h="45px"
                    bg="#ffa100"
                    cursor="pointer"
                    onClick={signInWithGoogle}
                  >
                    <Flex ml={10} h="100%" alignItems="center">
                      <FaAmazon color="white" size="30px" />
                      <Text color="white" ml={10}>
                        Amazon
                      </Text>
                    </Flex>
                  </Box>
                </VStack>
              </Box>
              <Box w="100%">
                <FormControl onSubmit={submitUser}>
                  {/* <FormLabel>Email</FormLabel> */}
                  <Input
                    focusBorderColor="black"
                    type="text"
                    value={Fname}
                    onChange={(e) => setFname(e.target.value)}
                    borderRadius={1}
                    placeholder="First name"
                    color="black"
                    h="45px"
                    name="first_name"
                  />
                  <Input
                    focusBorderColor="black"
                    mt={5}
                    name="last_name"
                    type="text"
                    value={Lname}
                    onChange={(e) => setLname(e.target.value)}
                    borderRadius={1}
                    placeholder="Last name"
                    color="black"
                    h="45px"
                  />
                  <Input
                    focusBorderColor="black"
                    mt={5}
                    name="email"
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
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    borderRadius={1}
                    placeholder="Password"
                    color="black"
                    h="45px"
                  />
                  <Flex mt={3} alignItems="center">
                    <Text align="left" display="inline-block">
                      {" "}
                      Subscribe for Newsletter
                    </Text>
                    <Checkbox
                      ml={2}
                      border="1px solid black"
                      borderRadius={3}
                      colorScheme="blue"
                    />
                  </Flex>

                  <Input
                    onClick={submitUser}
                    className="create_btn"
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
                    value="Create"
                  />

                  <Flex justifyContent="center" mt={5}>
                    <Text>
                      Already have an account?
                      <Link to="/login">
                        <Text
                          display="inline"
                          borderBottom="1px solid black"
                          _hover={{
                            color: "blue",
                            borderBottom: "1px solid blue",
                          }}
                        >
                          {" "}
                          Log in{" "}
                        </Text>
                      </Link>
                    </Text>
                  </Flex>
                </FormControl>
              </Box>
            </VStack>
          </Center>
        </Box>
      </Tablet>
      <Mobile>
        <Box mb={100} mt={10}>
          <Center>
            <VStack spacing={10} w="80%">
              <Box w="100%">
                <VStack spacing={5} w="100%">
                  <Text mb={5} align="center" fontSize="30px">
                    Create account
                  </Text>
                  <Box
                    cursor="pointer"
                    onClick={faceBookLogin}
                    w="100%"
                    h="45px"
                    border="2px solid #1877f2"
                  >
                    <Flex ml={5} h="100%" alignItems="center">
                      <FaFacebook color="#1877f2" size="30px" />
                      <Text color="#1877f2" fontSize="14px" ml={4}>
                        Continue with Facebook
                      </Text>
                    </Flex>
                  </Box>
                  <Box
                    w="100%"
                    h="45px"
                    boxShadow="dark-lg"
                    cursor="pointer"
                    onClick={signInWithGoogle}
                  >
                    <Flex ml={5} h="100%" alignItems="center">
                      <FcGoogle color="#1877f2" size="30px" />
                      <Text ml={10} fontSize="14px">
                        Google
                      </Text>
                    </Flex>
                  </Box>
                  <Box
                    w="100%"
                    h="45px"
                    bg="#ffa100"
                    cursor="pointer"
                    onClick={signInWithGoogle}
                  >
                    <Flex ml={5} h="100%" alignItems="center">
                      <FaAmazon color="white" size="30px" />
                      <Text color="white" fontSize="14px" ml={10}>
                        Amazon
                      </Text>
                    </Flex>
                  </Box>
                </VStack>
              </Box>
              <Box w="100%">
                <FormControl onSubmit={submitUser}>
                  {/* <FormLabel>Email</FormLabel> */}
                  <Input
                    focusBorderColor="black"
                    type="text"
                    value={Fname}
                    onChange={(e) => setFname(e.target.value)}
                    borderRadius={1}
                    placeholder="First name"
                    color="black"
                    h="45px"
                    name="first_name"
                  />
                  <Input
                    focusBorderColor="black"
                    mt={5}
                    name="last_name"
                    type="text"
                    value={Lname}
                    onChange={(e) => setLname(e.target.value)}
                    borderRadius={1}
                    placeholder="Last name"
                    color="black"
                    h="45px"
                  />
                  <Input
                    focusBorderColor="black"
                    mt={5}
                    name="email"
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
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    borderRadius={1}
                    placeholder="Password"
                    color="black"
                    h="45px"
                  />
                  <Flex mt={3} alignItems="center">
                    <Text align="left" display="inline-block">
                      {" "}
                      Subscribe for Newsletter
                    </Text>
                    <Checkbox
                      ml={2}
                      border="1px solid black"
                      borderRadius={3}
                      colorScheme="blue"
                    />
                  </Flex>

                  <Input
                    onClick={submitUser}
                    className="create_btn"
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
                    value="Create"
                  />

                  <Flex justifyContent="center" mt={5}>
                    <Text>
                      Already have an account?
                      <Link to="/login">
                        <Text
                          display="inline"
                          borderBottom="1px solid black"
                          _hover={{
                            color: "blue",
                            borderBottom: "1px solid blue",
                          }}
                        >
                          {" "}
                          Log in{" "}
                        </Text>
                      </Link>
                    </Text>
                  </Flex>
                </FormControl>
              </Box>
            </VStack>
          </Center>
        </Box>
      </Mobile>
    </>
  );
};
