import React from 'react';
import {Input,Box,Button, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,Heading,Image,Checkbox,Radio } from "@chakra-ui/react"
import { useState } from 'react';
const Subtotal = () => {
   const [coupon,setCoupon]=useState()
    const [valueChange,setValueChange]=useState(true)
    let array1=[
        {
            "image": "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1_533x.jpg?v=1659450226",
            "hoverImage": "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-4_1_533x.jpg?v=1659450231",
            "name": "Fern Ear Cuff Earrings",
            "srchref": "https://lovoda.com/products/fern-ear-cuff-earrings",
            "price": 10.00,
            "id": 3
          },
          {
            "image": "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-1_1_533x.jpg?v=1659450051",
            "hoverImage": "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-3_1_533x.jpg?v=1659450054",
            "name": "Blossom Ear Cuff Earrings",
            "srchref": "https://lovoda.com/products/blossom-ear-cuff-earrings",
            "price": 10.00,
            "id": 4
          },
          {
            "image": "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-1_1_533x.jpg?v=1659450051",
            "hoverImage": "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-3_1_533x.jpg?v=1659450054",
            "name": "Blossom Ear Cuff Earrings",
            "srchref": "https://lovoda.com/products/blossom-ear-cuff-earrings",
            "price": 40.00,
            "id": 5
          },
    ]
   

 
        // adding price
        const val=array1.reduce((amount,item)=> (item.price)+amount, 0)
   
        const totalValue=val+7;

        var discount=totalValue
        discount=discount-Math.floor(discount*(30/100))
    
        const handleCoupon=()=>{
            if(coupon=="lovoda30%"){
                setValueChange(false)            
                // console.log("inside",discount)
            }
            else
            setValueChange(true)
        }

    return (
        <Box width="30%" backgroundColor="rgb(247,247,247)" pl="1rem" pr="1rem">
          
           {/* add to cart data */}
           {
            array1?.map((item)=>{
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
                        <Heading fontWeight="light" size="xs" >$ {val}.00</Heading>
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
   
    );
};

export default Subtotal;