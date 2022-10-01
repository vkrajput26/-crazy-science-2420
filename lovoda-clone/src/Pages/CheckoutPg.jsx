import React from 'react';
import "../Style/CheckoutPg.css"
import {Input,Box,Button, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,Heading,Image,Checkbox  } from "@chakra-ui/react"

    import { Link, useNavigate } from 'react-router-dom';
import Subtotal from './Subtotal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { LogOut } from '../Redux/Auth/action';
import * as types from "../Redux/Auth/actionTypes"
    
const CheckoutPg = () => {

    const [address,setAddress]=useState()
    const user=useSelector((state)=>state.AuthReducer.user)
   const dispatch=useDispatch()
   const navigate=useNavigate();
    const signOutBtn=()=>{
        dispatch(LogOut()).then(r=>{
          dispatch({type:types.USER_LOGIN_FAILURE})
          navigate("/")
        })
              }

    return (
        <Box display="flex" justifyContent="center" gap="2rem" >
            <Box width="40%" mt="4rem" >
            <Image
                    borderRadius='full'
                
                    width="120px"
                    height="60px"
                    src='https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_x320.png?v=1645644264'
                    alt='website-img'
                    />
      <Breadcrumb separator='>' fontSize="sm" color="black" mt="2rem" display="flex" justifyContent="start" >
            <BreadcrumbItem color="blue.300">
                <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Information</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Shipping</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
            </BreadcrumbItem>

            
    </Breadcrumb>
                {/* contact information */}
               
                 <Box mt="2rem">
                        <Heading  display="flex" fontWeight="" justifyContent="start" as='h4' size='md'>Contact information</Heading>
                        <Box mt="1rem" display="flex" gap="1rem" >
                            <Image src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" alt="" width="45px" />
                             <Box>
                             <Heading   as='h6' size='xs'>{user} </Heading>
                                <Heading mt={2} cursor="pointer" onClick={signOutBtn} color="blue.300" fontWeight="light" as='h6' size='xs'>Log out  </Heading>
                                </Box>   
                        </Box>
                        <Box>
                        <Checkbox display="flex" defaultChecked>Email me with news and offers</Checkbox>
                        </Box>
                 </Box>



                 {/* shipping address */}
      <Box>
      <Heading mt="2rem" display="flex" fontWeight="" justifyContent="start" as='h4' size='md'>Shipping address</Heading>
      <Input mt="1rem" placeholder='Country/Region' size='md' />
        <Box mt="1rem"  display="flex" gap="1rem" >
             <Input placeholder='First name' size='md' />
            <Input placeholder='Last name' size='md' />
        </Box>

        <Input mt="1rem" placeholder='Company (optional)' size='md' />
        <Input mt="1rem" placeholder='Address' size='md' value={address} onChange={(e)=>setAddress(e.target.value)} />
        <Input mt="1rem" placeholder='Apartment suite etc. (optional)' size='md' />
        
        <Box mt="1rem"  display="flex" gap="1rem" >
             <Input placeholder='City' size='md' />
            <Input placeholder='State' size='md' />
            <Input placeholder='ZIP code' size='md' />

        </Box>
  
        <Input mt="1rem" placeholder='Phone' size='md' />
        

        <Box mt="1rem" display="flex" justifyContent="space-between" >
        <Button fontSize="sm" colorScheme='white' color="blue.300" variant='solid'>
               {"<"} Return to cart
        </Button>
        
        <Link to="/shipping" >
        <Button fontSize="sm" colorScheme='black' backgroundColor="black" variant='solid'>
                Continue to shipping
        </Button>
        </Link>
        </Box>



     <Breadcrumb separator='' fontSize="sm" color="blue.300" mt="5rem" display="flex" justifyContent="start" >
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Refund policy</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Shipping policy</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Privacy policy</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Teams of services</BreadcrumbLink>
            </BreadcrumbItem>

            
    </Breadcrumb>

      
      </Box>

            </Box>


            {/* subtotal */}
           <Subtotal/>
        </Box>
    );
};

export default CheckoutPg;