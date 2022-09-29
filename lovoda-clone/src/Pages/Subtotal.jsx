import React from 'react';
import {Input,Box,Button, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,Heading,Image,Checkbox,Radio } from "@chakra-ui/react"
const Subtotal = () => {
    return (
        <Box width="30%" backgroundColor="rgb(247,247,247)" pl="1rem" pr="1rem">
          
           {/* add to cart data */}
            
            <hr />
                <Box display="flex" gap="1rem" mt="1.2rem" mb="1.2rem"  >
                <Input  placeholder='Gift card on discount code' backgroundColor="white" size='md' />
                <Button fontSize="sm" colorScheme='grey.400' backgroundColor="grey" variant='solid'>
                      Apply
                 </Button>

                </Box>
                <hr />

                <Box mt="2rem"  mb="1.2rem"  >
                      <Box display="flex" justifyContent="space-between" mt="0.5rem"  >
                        <Heading fontWeight="light" size="xs" >Subtotal</Heading>
                        <Heading fontWeight="light" size="xs" >$ 00</Heading>
                        </Box>    

                        <Box display="flex" justifyContent="space-between" mt="0.5rem"  >
                        <Heading fontWeight="light" size="xs" >Shipping</Heading>
                        <Heading fontWeight="light" size="xs" >Calculate at next step</Heading>
                        </Box> 

                        <Box display="flex" justifyContent="space-between" mt="0.5rem" >
                        <Heading fontWeight="light" size="xs" >Taxes (estimated)</Heading>
                        <Heading fontWeight="light" size="xs" >$ 00</Heading>
                        </Box>       
                </Box>
                    <hr />
                    <Box display="flex" justifyContent="space-between" mt="2rem" >
                        <Heading fontWeight="light" size="xs" >Total</Heading>
                        <Heading fontWeight="light" size="xs" >$ 00</Heading>
                        </Box> 


        </Box>
   
    );
};

export default Subtotal;