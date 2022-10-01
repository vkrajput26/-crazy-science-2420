import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../Redux/Auth/action";
import * as types from "../Redux/Auth/actionTypes";
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

export const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthError, ErrorMsg } = useSelector((state) => {
    return {
      user: state.AuthReducer.user,
      ErrorMsg: state.AuthReducer.ErrorMsg,
      isAuthError: state.AuthReducer.isAuthError,
    };
  });
  // console.log("amol",user)

  const signOutBtn = () => {
    dispatch(LogOut()).then((r) => {
      dispatch({ type: types.USER_LOGIN_FAILURE });
      navigate("/");
    });
  };
  return (
    <>
      <Desktop>
        <Box w="84%" m="auto" mb="200px">
          <Flex justifyContent="space-evenly">
            <Box mt={10} w="50%">
              <Text align="left" fontSize="40px">
                Account
              </Text>
              <Flex onClick={signOutBtn} alignItems="center" cursor="pointer">
                <HiOutlineUser size="20px" />
                <Text
                  fontSize="15px"
                  _hover={{ color: "blue" }}
                  textDecoration="underline"
                  ml={1}
                >
                  Log out
                </Text>
              </Flex>
              <Text mt={10} align="left" fontSize="30px">
                Order history
              </Text>
              <Text ml={1} align="left" fontSize="15px">
                You haven't placed any orders yet.
              </Text>
            </Box>
            <Box pl="45%" w="70%">
              <Text mt="50%" Align="left" fontSize="25px">
                Account details
              </Text>
              <Text  fontSize="15px" align="left">
                {user && user}
              </Text>
              <Text  fontSize="15px" align="left">
                India
              </Text>
              <Text
               
                mt={10}
                textDecoration="underline"
                cursor="pointer"
                fontSize="15px"
                align="left"
                _hover={{ color: "blue" }}
              >
                View addresses(1)
              </Text>
            </Box>
          </Flex>
        </Box>
      </Desktop>
      <Tablet>
        {" "}
        <Box w="98%" m="auto" mb="150px">
          <Box ml={10} justifyContent="space-evenly">
            <Box mt={10} w="40%">
              <Text align="left" fontSize="40px">
                Account
              </Text>
              <Flex onClick={signOutBtn} alignItems="center" cursor="pointer">
                <HiOutlineUser size="20px" />
                <Text
                  fontSize="15px"
                  _hover={{ color: "blue" }}
                  textDecoration="underline"
                  ml={1}
                >
                  Log out
                </Text>
              </Flex>
              <Text mt={10} align="left" fontSize="30px">
                Order history
              </Text>
              <Text ml={1} align="left" fontSize="15px">
                You haven't placed any orders yet.
              </Text>
            </Box>
            <Box  w="100%">
              <Text align="left" mt="10%" fontSize="25px">
                Account details
              </Text>
              <Text mt={3} fontSize="15px" align="left">
                {user && user}
              </Text>
              <Text mt={2} fontSize="15px" align="left">
                India
              </Text>
              <Text
              
                mt={10}
                textDecoration="underline"
                cursor="pointer"
                fontSize="15px"
                align="left"
                _hover={{ color: "blue" }}
              >
                View addresses(1)
              </Text>
            </Box>
          </Box>
        </Box>
      </Tablet>
      <Mobile>
      <Box w="98%" m="auto" mb="120px">
          <Box ml={7} justifyContent="space-evenly">
            <Box mt={10} w="80%">
              <Text align="left" fontSize="25px">
                Account
              </Text>
              <Flex onClick={signOutBtn} mt={2} alignItems="center" ml="-5px" cursor="pointer">
                <HiOutlineUser size="20px" />
                <Text
                  fontSize="15px"
                  _hover={{ color: "blue" }}
                  textDecoration="underline"
                  ml={1}
                >
                  Log out
                </Text>
              </Flex>
              <Text mt={10} align="left" fontSize="20px">
                Order history
              </Text>
              <Text mt={2} align="left" fontSize="15px">
                You haven't placed any orders yet.
              </Text>
            </Box>
            <Box  w="100%">
              <Text align="left" mt="10%" fontSize="25px">
                Account details
              </Text>
              <Text mt={3} fontSize="15px" align="left">
                {user && user}
              </Text>
              <Text mt={2} fontSize="15px" align="left">
                India
              </Text>
              <Text
              
                mt={10}
                textDecoration="underline"
                cursor="pointer"
                fontSize="15px"
                align="left"
                _hover={{ color: "blue" }}
              >
                View addresses(1)
              </Text>
            </Box>
          </Box>
        </Box>
      </Mobile>
    </>
  );
};
