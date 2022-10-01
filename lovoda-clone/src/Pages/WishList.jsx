import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react';
import styles from "../Style/wishlist.module.css";
import { AiFillHeart} from "react-icons/ai";

export const WishList = () => {
  return (
    <Box
      className={styles.btn}>
         <Box
            className={styles.icon}
          
          >
           <Text  className={styles.txt}>WISHLIST</Text> 
           <Box ml={2} mt={10} borderRadius={30} mb="-50px" w="40px" h="40px" bg="#c9ac92">
            <Flex justifyContent="center"> <AiFillHeart size={30} color="white" style={{marginTop:"8px"}} /></Flex>
           
           </Box>
          </Box>
          
        </Box>
  )
}
