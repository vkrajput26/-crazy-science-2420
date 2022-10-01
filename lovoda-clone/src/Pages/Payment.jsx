import React from 'react';
import {Input,Box,Button, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,Heading,Image,Checkbox,Radio,  Alert,
    AlertIcon, } from "@chakra-ui/react"
    import { useToast } from '@chakra-ui/react'

    import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';

const Payment = () => {
 
  const toast = useToast()

 

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

        <BreadcrumbItem color="blue.300">
            <BreadcrumbLink href='#'>Information</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage color="blue.300">
            <BreadcrumbLink href='#'>Shipping</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
        </BreadcrumbItem>

        
</Breadcrumb>
            {/* contact information */}
           <Box border="1px solid grey" mt="2rem"  mb="2rem">
            <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Contact</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >email</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>

        <hr />
        <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Ship to</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >India</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>
         
            <hr />
        <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Method</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >Priority Mail $7.00</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>
          </Box>


             {/* shipping method */}
         <Heading fontWeight="light" as="h6" size="md" display="flex" mb="1rem"  >Payment</Heading>
         <Heading fontWeight="light" as="h6" size="xs" display="flex" mb="1rem"  >All transactions are secure and encrypted.</Heading>
      
      
         {/* credit card-section */}

         <Box border="1px solid grey" >
                <Box display="flex" justifyContent="space-between" ml="1rem" mr="5.6rem" mt="0.7rem" mb=".5rem" >
                    <Box>
                    <Radio colorScheme='blue' value='1'>
                       Credit card
                    </Radio>
                    </Box>

                    <Box display="flex">
                          <Image src='https://cdn.shopify.com/shopifycloud/checkout-web/assets/074315f4e64637ad6544fb57ee4a5a31.svg' alt='visa' />
                          <Image src='https://cdn.shopify.com/shopifycloud/checkout-web/assets/514f6e6c6276bbce83746b13748ab9f5.svg' alt='master' />
                          <Image src='https://cdn.shopify.com/shopifycloud/checkout-web/assets/c4d8f750eff92213f47e4a66f5582d66.svg' alt='am' />
                          <Image src='https://cdn.shopify.com/shopifycloud/checkout-web/assets/d0c08983f01237697642c8d7ad425e44.svg' alt='cs' />
                   
                    </Box>
                    
                </Box>
            <hr />
            {/* card-details */}

            <Box ml="1rem" mr="1rem" mb="1rem" backgroundColor="rgb(247,247,247)" >
                <Input placeholder='Card number' mt="1rem" backgroundColor="white" />
                <Input placeholder='Cardholder name' mt="1rem"  backgroundColor="white"/>
                <Box display="flex" gap="2rem" mt="1rem"  >
                
                <Input
                 backgroundColor="white"
                        placeholder="Select Date and Time"
                        size="md"
                        type="date"
                        />
                <Input placeholder='Security code'  backgroundColor="white"/>
                </Box>
            </Box>

            {/* payment-option */}
            <hr />
                <Box ml="1rem" mr="1rem" >

                    <Box display="flex"  >
                    <Radio colorScheme='blue' value='1'>
                       <Image width="72px" src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"  alt='paypal' />
                    </Radio>
                    </Box>
                    <hr />


                    <Box display="flex"  >
                    <Radio colorScheme='blue' value='1'>
                       Afterpay
                    </Radio>
                    </Box>
                    <hr />

                    <Box display="flex"  >
                    <Radio colorScheme='blue' value='1'>
                       <Image width="82px" src="https://brandlogos.net/wp-content/uploads/2022/08/shop_pay-logo_brandlogos.net_tyf5p.png"  alt='paypal' />
                    </Radio>
                    </Box>
                    <hr />
                </Box>
         </Box>

            {/* billing box */}
            <Box>
            <Heading fontWeight="light" as="h6" size="md" display="flex" mb="1rem" mt="2rem" >Billing address</Heading>
         <Heading fontWeight="light" as="h6" size="xs" display="flex" mb="1rem"  >Select the address that matches your card or payment method.</Heading>
                <Box border="1px solid grey" pl="1rem" pr="1rem" >
                <Box display="flex"  >
                    <Radio colorScheme='blue' value='1'>
                    Same as shipping address
                    </Radio>
                    </Box>
                    <hr />
                    <Box display="flex"  >
                    <Radio colorScheme='blue' value='1'>
                    Use a different billing address
                    </Radio>
                    </Box>
                </Box>
            </Box>

            <Box>
            <Heading fontWeight="light" as="h6" size="md" display="flex" mb="1rem" mt="2rem" >Remember me</Heading>
            <Box display="flex"  border="1px solid grey"  pl="1rem" pr="1rem"  >
                    <Radio colorScheme='blue' value='1'>
                    Same as shipping address
                    </Radio>
                    </Box>
            </Box>

         {/* do here only */}
  <Box>
  

   
    

    <Box mt="1rem" display="flex" justifyContent="space-between" >
        <Link to="/shipping">
        
    <Button fontSize="sm" colorScheme='white' color="blue.300" variant='solid'>
           {"<"} Return to shipping
    </Button>
        </Link>
    
    <Link to="/payment" >
    <Button fontSize="sm" colorScheme='black' backgroundColor="black" variant='solid' onClick={() =>
        toast({
          title: 'Payment Done Successfully',
        
          status: 'success',
          duration: 9000,
          isClosable: true,
           position: "top",
        })
       
        } >
            pay now
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

export default Payment;