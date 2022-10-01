import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import styles from "../Style/wishlist.module.css";
import { AiFillHeart} from "react-icons/ai";
import {FaFacebookF,FaPinterestP,FaTwitter} from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {ChevronDownIcon} from "@chakra-ui/icons"
export const WishList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Box
      className={styles.btn}>
         <Box
            className={styles.icon}
            ref={btnRef}
            onClick={onOpen}
          >
           <Text  className={styles.txt}>WISHLIST</Text> 
           <Box ml={2} mt={10} borderRadius={30} mb="-50px" w="30px" h="30px" bg="#c9ac92">
            <Flex justifyContent="center"> <AiFillHeart size={20} color="white" style={{marginTop:"8px"}} /></Flex>
           
           </Box>
          </Box>
          <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems="center">
          <Box  borderRadius={30}  w="40px" h="40px" bg="#c9ac92">
            <Flex justifyContent="center" > <AiFillHeart size={20} color="white" style={{marginTop:"10px"}} />
            </Flex>
           
           </Box>
           <Text  fontSize={"25px"} ml={5}>wishlist</Text> <Text mt={1} ml={2} color="#c9ac92">{2}</Text>
           </Flex>
          
          
          </DrawerHeader>

          <DrawerBody>
          <Text fontWeight={"bold"} fontSize="15px" align={"center"}>SHARE:
           </Text>
           <Flex mt={5} justifyContent={"space-evenly"}>
           <Box  borderRadius={30}  w="40px" h="40px" border={"1px solid grey"} color="grey" _hover={{ bg:"blue",color:"white",border:"none"}}>
            <Flex justifyContent="center" > <FaFacebookF size={20}  style={{marginTop:"10px"}} />
            </Flex>
           
           </Box>
           <Box  borderRadius={30}  w="40px" h="40px" border={"1px solid grey"} color="grey" _hover={{ bg:"#3182ce",color:"white",border:"none"}}>
            <Flex justifyContent="center" > <FaTwitter size={20}  style={{marginTop:"10px"}} />
            </Flex>
           
           </Box>
           <Box  borderRadius={30}  w="40px" h="40px" border={"1px solid grey"} color="grey" _hover={{ bg:"red",color:"white",border:"none"}}>
            <Flex justifyContent="center" > <FaPinterestP size={20}  style={{marginTop:"10px"}} />
            </Flex>
           
           </Box>
           <Box  borderRadius={30}  w="40px" h="40px" border={"1px solid grey"} color="grey" _hover={{ bg:"orange",color:"white",border:"none"}}>
            <Flex justifyContent="center" > <HiOutlineMail size={20}  style={{marginTop:"10px"}} />
            </Flex>
           
           </Box>
       
           </Flex>
<Text mt={5} fontSize="15px" _hover={{textDecoration:"underline"}} align={"center"}>Goto wishlist page</Text>

<Button w="100%" mb={5}  mt={5} color={"white"} bg={'#c9ac92'}>+ADD A NEW LIST</Button>
<hr />

<Menu>
  <MenuButton >
    <Flex alignItems={"center"} justifyContent={"space-between"}>
    <ChevronDownIcon /><Text fontWeight={"bold"} fontSize={"13px"} ml={20}> FAVORITES 2</Text>
    </Flex>
  
  </MenuButton>
  <MenuList>
    <MenuItem minH='100px'>
      <Image
        boxSize='3rem'
        borderRadius='full'
        src='https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1_533x.jpg?v=1659450395'
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <Text display={"block"}>Fern Ear Cuff Earrings</Text>
     
    </MenuItem>
    
    <MenuItem minH='100px'>
      <Image
        boxSize='3rem'
        borderRadius='full'
        src=' https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-2_1_533x.jpg?v=1659449908'
        alt='Simon the pensive'
        mr='12px'
      />
      <span>Blossom Ear Cuff Earringse</span>
    </MenuItem>
  </MenuList>
</Menu>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
          
        </Box>
  )
}

