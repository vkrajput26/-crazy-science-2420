import { Box, Button, Center, Flex, Heading, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Text, Textarea, Tooltip, useColorMode } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";

import React, { useState } from "react";
import styles from "../Style/Chat.module.css";
import { useMediaQuery } from "react-responsive";
import {CloseIcon,ArrowBackIcon,ChevronRightIcon} from "@chakra-ui/icons"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
export const Chat = () => {
    const isAuth=useSelector((state)=>state.AuthReducer.isAuth)
   
  // const {scrollsection,home}=props
  const initRef = React.useRef()
  const { colorMode, toggleColorMode } = useColorMode();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    
    // const { colorMode, toggleColorMode } = useColorMode();
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>


      {" "}
      <Desktop>
    
      <Box  className={styles.btn}>
           <Popover  closeOnBlur={false} placement='top-start'  initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger >
          {/* <Tooltip hasArrow label='Search places'   placement='top' bg='red.600'> */}
  
          <Box
            className={styles.icon}
            // style={{ display: visible ? "inline" : "none" }}
          >
            {isOpen ? <CloseIcon /> : 'Chat with us'}
           
          </Box>
          {/* </Tooltip> */}
            {/* <Button>Click to {isOpen ? 'close' : 'open'}</Button> */}
          </PopoverTrigger>
          <Portal  >
            <PopoverContent>

              <PopoverHeader  borderTopLeftRadius={5} borderTopRightRadius={5} bg="rgb(68, 89, 79)">
                
                <Box mt={2} mb={2} color="white" >
               <Flex alignItems="center" justifyContent="space-between">
                <Box> <ArrowBackIcon  onClick={onClose}
                cursor="pointer" boxSize={6} /></Box>
                <Box w="90%" pr={5}> <Heading ml={2} textAlign="center" size="md"> Chat with us</Heading>
                    
               
        <Text textAlign="center" fontSize="13px" >👋 Hello! Let us know if you have a specific question, or give an idea of what you're looking for. We're happy to make recommendations.</Text></Box>
               </Flex>
                   
</Box>
{/* <PopoverCloseButton position="left" /> */}
              </PopoverHeader>
             
              <PopoverBody>
                <Box>
                 <Textarea placeholder="write message"  />
                 {/* <ChevronRightIcon/> */}
                 <Heading mt={5} textAlign="center" size="sm">Instant answers</Heading>
                </Box>
                <Link to={isAuth===true?"/account":"/login"} >
                <Button
                onClick={onclose}
                  mt={4}
                  w="100%"
                  variant="outline"
                  colorScheme='rgb(68, 89, 79)'
                  color="rgb(68, 89, 79)"
                //   ref={initRef}
                mb={5}
                >
                 Track my order
                 <ChevronRightIcon ml="130px" boxSize={8}/>
                </Button></Link>
              </PopoverBody>
              {/* <PopoverFooter>This is the footer</PopoverFooter> */}
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
         
        </Box>

     



      </Desktop>
      <Tablet>

          <Box  className={styles.Tabbtn}>
           <Popover  closeOnBlur={false} placement='top-start'  initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger >
          <Box
            className={styles.Tabicon}
            // style={{ display: visible ? "inline" : "none" }}
          >
            {isOpen ? <CloseIcon /> : 'Chat with us'}
           
          </Box>
            {/* <Button>Click to {isOpen ? 'close' : 'open'}</Button> */}
          </PopoverTrigger>
          <Portal  >
            <PopoverContent>

              <PopoverHeader  borderTopLeftRadius={5} borderTopRightRadius={5} bg="rgb(68, 89, 79)">
                
                <Box mt={2} mb={2} color="white" >
               <Flex alignItems="center" justifyContent="space-between">
                <Box> <ArrowBackIcon  onClick={onClose}
                cursor="pointer" boxSize={6} /></Box>
                <Box w="90%" pr={5}> <Heading ml={2} textAlign="center" size="md"> Chat with us</Heading>
                    
               
        <Text textAlign="center" fontSize="13px" >👋 Hello! Let us know if you have a specific question, or give an idea of what you're looking for. We're happy to make recommendations.</Text></Box>
               </Flex>
                   
</Box>
{/* <PopoverCloseButton position="left" /> */}
              </PopoverHeader>
             
              <PopoverBody>
                <Box>
                 <Textarea placeholder="write message"  />
                 {/* <ChevronRightIcon/> */}
                 <Heading mt={5} textAlign="center" size="sm">Instant answers</Heading>
                </Box>
                <Link to={isAuth===true?"/account":"/login"} >
                <Button
                onClick={onclose}
                  mt={4}
                  w="100%"
                  variant="outline"
                  colorScheme='rgb(68, 89, 79)'
                  color="rgb(68, 89, 79)"
                //   ref={initRef}
                mb={5}
                >
                 Track my order
                 <ChevronRightIcon ml="130px" boxSize={8}/>
                </Button></Link>
              </PopoverBody>
              {/* <PopoverFooter>This is the footer</PopoverFooter> */}
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
         
        </Box>

      </Tablet>
      <Mobile>
      <Box  className={styles.Mobbtn}>
           <Popover  closeOnBlur={false} placement='top-start'  initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger >
          <Box
            className={styles.Mobicon}
            // style={{ display: visible ? "inline" : "none" }}
          >
            {isOpen ? <CloseIcon /> : 'Chat with us'}
           
          </Box>
            {/* <Button>Click to {isOpen ? 'close' : 'open'}</Button> */}
          </PopoverTrigger>
          <Portal  >
            <PopoverContent>

              <PopoverHeader  borderTopLeftRadius={5} borderTopRightRadius={5} bg="rgb(68, 89, 79)">
                
                <Box mt={2} mb={2} color="white" >
               <Flex alignItems="center" justifyContent="space-between">
                <Box> <ArrowBackIcon  onClick={onClose}
                cursor="pointer" boxSize={6} /></Box>
                <Box w="90%" pr={5}> <Heading ml={2} textAlign="center" size="md"> Chat with us</Heading>
                    
               
        <Text textAlign="center" fontSize="13px" >👋 Hello! Let us know if you have a specific question, or give an idea of what you're looking for. We're happy to make recommendations.</Text></Box>
               </Flex>
                   
</Box>
{/* <PopoverCloseButton position="left" /> */}
              </PopoverHeader>
             
              <PopoverBody>
                <Box>
                 <Textarea placeholder="write message"  />
                 {/* <ChevronRightIcon/> */}
                 <Heading mt={5} textAlign="center" size="sm">Instant answers</Heading>
                </Box>
                <Link to={isAuth===true?"/account":"/login"} >
                <Button
                onClick={onclose}
                  mt={4}
                  w="100%"
                  variant="outline"
                  colorScheme='rgb(68, 89, 79)'
                  color="rgb(68, 89, 79)"
                //   ref={initRef}
                mb={5}
                >
                 Track my order
                 <ChevronRightIcon ml="130px" boxSize={8}/>
                </Button></Link>
              </PopoverBody>
              {/* <PopoverFooter>This is the footer</PopoverFooter> */}
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
         
        </Box>
      </Mobile>
    </>
  );
};
