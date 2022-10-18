import React from 'react';
import {Input,Box,Button, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,Heading,Image,Checkbox,Radio } from "@chakra-ui/react"
import { useState } from 'react';

import { useMediaQuery } from "react-responsive";
import { useSelector } from 'react-redux';

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


const Subtotal = () => {
   const [coupon,setCoupon]=useState()
    const [valueChange,setValueChange]=useState(true)
    
   
   
    //  console.log("subtotal")
     
     const products=useSelector((state)=>state.CartReducer.products)
    //  console.log("products",products)
   
 
        // adding price
        const val=products.reduce((amount,item)=> (item.price)+amount, 0)
    const totalPrice=useSelector(state=>state.CartReducer.totalPrice)
        const totalValue=totalPrice+7;

        var discount=totalValue
        discount=discount-Math.floor(discount*(30/100))
    
        const handleCoupon=()=>{
            if(coupon=="lovoda30%"){
                setValueChange(false)            
               
            }
            else
            setValueChange(true)
        }

    return (
       <>
       <Desktop>
       <Box width="30%" backgroundColor="rgb(247,247,247)" pl="1rem" pr="1rem" mt="2rem" mb="2rem">
          
          {/* add to cart data */}
          {
           products?.map((item)=>{
               return <Box key={item.id} display="flex" justifyContent="space-between" >
                       <Image src={item.image} alt='image' width="51px" />
                       <Heading fontWeight="light" size="sm" mt="2rem" > {item.name} </Heading>
                       <Heading fontWeight="light" size="sm" mt="2rem" > ${item.price}.00 </Heading>

               </Box>
           })
          }
           
           <hr />
               <Box display="flex" gap="1rem" mt="1.2rem" mb="1.2rem"  >
               <Input  placeholder='Gift card on discount code' backgroundColor="white" size='md' value={coupon}  onChange={(e)=>setCoupon(e.target.value)} />
               <Button fontSize="sm" colorScheme='grey.400' backgroundColor="grey" variant='solid' onClick={handleCoupon} >
                     Apply
                </Button>

               </Box>
               <hr />

               <Box mt="2rem"  mb="1.2rem"  >
                     <Box display="flex" justifyContent="space-between" mt="0.5rem"  >
                       <Heading fontWeight="light" size="xs" >Subtotal</Heading>
                       <Heading fontWeight="light" size="xs" >$ {totalPrice}.00</Heading>
                       </Box>    

                       <Box display="flex" justifyContent="space-between" mt="0.5rem"  >
                       <Heading fontWeight="light" size="xs" >Shipping</Heading>
                       <Heading fontWeight="light" size="xs" >$7.00</Heading>
                       </Box> 

                       <Box display="flex" justifyContent="space-between" mt="0.5rem" >
                       <Heading fontWeight="light" size="xs" >Taxes (estimated)</Heading>
                       <Heading fontWeight="light" size="xs" >$ 00</Heading>
                       </Box>       
               </Box>
                   <hr />
                   <Box display="flex" justifyContent="space-between" mt="2rem" >
                       <Heading fontWeight="light" size="xs" >Total</Heading>
                       <Heading fontWeight="light" size="xs" >$ { valueChange?  `${totalValue}`:   `${discount}` }.00</Heading>
                       </Box> 


       </Box>
  
       </Desktop>



       <Tablet>
       <Box width="90%" backgroundColor="rgb(247,247,247)" pl="1rem" pr="1rem" mt="2rem" mb="2rem">
          
          {/* add to cart data */}
          {
           products?.map((item)=>{
               return <Box key={item.id} display="flex" justifyContent="space-between" >
                       <Image src={item.image} alt='image' width="51px" />
                       <Heading fontWeight="light" size="sm" mt="2rem" > {item.name} </Heading>
                       <Heading fontWeight="light" size="sm" mt="2rem" > ${item.price}.00 </Heading>

               </Box>
           })
          }
           
           <hr />
               <Box display="flex" gap="1rem" mt="1.2rem" mb="1.2rem"  >
               <Input  placeholder='Gift card on discount code' backgroundColor="white" size='md' value={coupon}  onChange={(e)=>setCoupon(e.target.value)} />
               <Button fontSize="sm" colorScheme='grey.400' backgroundColor="grey" variant='solid' onClick={handleCoupon} >
                     Apply
                </Button>

               </Box>
               <hr />

               <Box mt="2rem"  mb="1.2rem"  >
                     <Box display="flex" justifyContent="space-between" mt="0.5rem"  >
                       <Heading fontWeight="light" size="xs" >Subtotal</Heading>
                       <Heading fontWeight="light" size="xs" >$ {totalPrice}.00</Heading>
                       </Box>    

                       <Box display="flex" justifyContent="space-between" mt="0.5rem"  >
                       <Heading fontWeight="light" size="xs" >Shipping</Heading>
                       <Heading fontWeight="light" size="xs" >$7.00</Heading>
                       </Box> 

                       <Box display="flex" justifyContent="space-between" mt="0.5rem" >
                       <Heading fontWeight="light" size="xs" >Taxes (estimated)</Heading>
                       <Heading fontWeight="light" size="xs" >$ 00</Heading>
                       </Box>       
               </Box>
                   <hr />
                   <Box display="flex" justifyContent="space-between" mt="2rem" >
                       <Heading fontWeight="light" size="xs" >Total</Heading>
                       <Heading fontWeight="light" size="xs" >$ { valueChange?  `${totalValue}`:   `${discount}` }.00</Heading>
                       </Box> 


       </Box>
  
       </Tablet>

       <Mobile>
       <Box width="90%" backgroundColor="rgb(247,247,247)" pl="1rem" pr="1rem" mt="2rem" mb="2rem" ml="1rem">
          
          {/* add to cart data */}
          {
           products?.map((item)=>{
               return <Box key={item.id} display="flex" justifyContent="space-between"  >
                       <Image src={item.image} alt='image' width="51px" />
                       <Heading fontWeight="light" size="sm" mt="2rem" > {item.name} </Heading>
                       <Heading fontWeight="light" size="sm" mt="2rem" > ${item.price}.00 </Heading>

               </Box>
           })
          }
           
           <hr />
               <Box display="flex" gap="1rem" mt="1.2rem" mb="1.2rem"  >
               <Input  placeholder='Gift card on discount code' backgroundColor="white" size='md' value={coupon}  onChange={(e)=>setCoupon(e.target.value)} />
               <Button fontSize="sm" colorScheme='grey.400' backgroundColor="grey" variant='solid' onClick={handleCoupon} >
                     Apply
                </Button>

               </Box>
               <hr />

               <Box mt="2rem"  mb="1.2rem"  >
                     <Box display="flex" justifyContent="space-between" mt="0.5rem"  >
                       <Heading fontWeight="light" size="xs" >Subtotal</Heading>
                       <Heading fontWeight="light" size="xs" >$ {totalPrice}.00</Heading>
                       </Box>    

                       <Box display="flex" justifyContent="space-between" mt="0.5rem"  >
                       <Heading fontWeight="light" size="xs" >Shipping</Heading>
                       <Heading fontWeight="light" size="xs" >$7.00</Heading>
                       </Box> 

                       <Box display="flex" justifyContent="space-between" mt="0.5rem" >
                       <Heading fontWeight="light" size="xs" >Taxes (estimated)</Heading>
                       <Heading fontWeight="light" size="xs" >$ 00</Heading>
                       </Box>       
               </Box>
                   <hr />
                   <Box display="flex" justifyContent="space-between" mt="2rem" >
                       <Heading fontWeight="light" size="xs" >Total</Heading>
                       <Heading fontWeight="light" size="xs" >$ { valueChange?  `${totalValue}`:   `${discount}` }.00</Heading>
                       </Box> 


       </Box>
       </Mobile>
       </>
    );
};

export default Subtotal;