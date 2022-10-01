import { AddIcon,DeleteIcon,InfoOutlineIcon,MinusIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import shopPayicon from "../Data/images/shop_pay.webp";
import {FaCcPaypal,FaGooglePay} from "react-icons/fa"
export const CartPage = () => {

    const dispatch=useDispatch()
   
    const {cart,products,totalQty,totalPrice }= useSelector(state=>
        { return{cart:state.CartReducer.cart,products:state.CartReducer.products,
            totalQty:state.CartReducer.totalQty,totalPrice:state.CartReducer.totalPrice}}
         );
         const [data,setData]=useState([])

         console.log("products",products)
         console.log("totalQty",totalQty)
         console.log("totalPrice",totalPrice)

const RemoveItem=(item,p)=>{
    let price=totalPrice-p;
    dispatch({type:"DELETE",payload:{item,price}});
    alert("delete")
    // console.log()
}
const increment=(item)=>{
    dispatch({type:"ICREAMENT",payload:item})
}
useEffect(() => {
    // setLoading(true);
    fetch(`https://lovodaapi.herokuapp.com/api/earrings?_page=1&_limit=4`)
        .then((res) => res.json())
        .then((res)=>{
            setData(res) ;
    })
}, []);

  return (
    <Box w="80%"  m="auto" >
<Flex alignItems={"center"} mt={10} justifyContent={"space-between"}>
    <Text fontSize={"35px"}>Your cart</Text>
    <Link to="/"><Text fontSize={"14px"} textDecoration={"underline"}>Continue shopping</Text></Link>
</Flex>
<Flex mt={5} justifyContent={"space-between"}>
    <Text fontSize={"13px"}>PRODUCT</Text>
    <Text fontSize={"13px"} ml={"250px"}>QUANTITY</Text>
    <Text fontSize={"13px"}>TOTAL</Text>
</Flex>
<hr style={{marginTop:"18px"}} />
<VStack mt={5} mb={10} spacing={8}>
{
    products.length>0 && products.map((item)=>(
    <Box w="100%">
        <Flex  justifyContent={"space-between"}>
            <Box w="40%">
               <Flex><Image w="150px" h="200px" src={item.image}  alt={item.image} />
               <Box ml={8}>  <Text fontSize={"15px"} align={"left"}>{item.name}</Text>
                <Text fontSize={"13px"} align={"left"}>${item.price}.00 </Text></Box>
              </Flex> 

            </Box>
            <Box w="30%" >
                <Flex alignItems={"center"}>
            <Flex ml={10} alignItems={"center"} mt="0.3rem" border="1px solid " p="0px 10px" justifyContent={"center"}>
                                    <Button variant={"ghost"}  onClick={() => dispatch({type:"DECREAMENT", payload:item.id}) } _hover={{cursor:"pointer"}}  mr="-3"><MinusIcon  h={3} w={3} /></Button>
                                    <Box _hover={{cursor:"pointer"}}  px="3" py="2" mr="-2"><Text ml={1} mr={1} fontSize={"md"}>{item.quantity}</Text></Box>
                                    <Button variant={"ghost"} onClick={() => dispatch({type:"ICREAMENT", payload:item.id})} _hover={{cursor:"pointer"}} px="3"py="2" mr="3"><AddIcon h={3} w={3} /></Button>
                                </Flex> <DeleteIcon  onClick={()=>RemoveItem(item.id,item.price)} cursor="pointer" ml={8} /></Flex>
                               
            </Box>
            <Box > <Text  fontSize={"13px"} align={"left"}>${item.price*item.quantity}.00</Text>
         </Box>
        </Flex>
    </Box>
    ))
}
</VStack>
<hr />
<Box mt={20}>
    <Flex justifyContent={"right"}>
        <Box w="30%">
            <Flex justifyContent={"right"} > <Text fontSize='15px'>Subtotal</Text><Text fontSize="15px" ml={8}>${94}.00</Text></Flex>
       <Text align={"right"} fontSize='14px'>or 4 interest-free payments of $23.50 with</Text>
      <Flex mt={2} alignItems={"center"} justifyContent={"right"}> <Badge  borderRadius={"25px"} mr={2} padding="2px 15px 2px 15px" colorScheme={"green"}>After Pay</Badge>
      <InfoOutlineIcon />
      </Flex>
      <Text align={"right"} mt={2} mb={2} fontSize='14px'> Taxes and shipping calculated at checkout</Text>
     <VStack mt={5} spacing={4}>
        <Flex justifyContent={"center"} alignItems="center" h="50px" w="95%" bg="black" color={"white"}>Check out</Flex>
        <Flex justifyContent={"center"} alignItems="center" h="50px" w="95%" bg={"#4120AF"}>
            <Image h="50px" w="40%" src={shopPayicon} alt="x" />
        </Flex>
        <Flex justifyContent={"center"} alignItems="center" h="50px" w="95%" bg={"#ffc439"}>
            <FaCcPaypal color='white' size={"58px"} />
        </Flex>
        <Flex justifyContent={"center"} alignItems="center" h="50px" w="95%" bg="black">
            <FaGooglePay size={"58px"} color='white'/>
        </Flex>
     </VStack>
     
        </Box>
      
    </Flex>
</Box>
<Box>
    <Text mb={5} align="left" fontSize="22px">Featured collection</Text>

    <SimpleGrid mb={10} columns={4} spacing={2}>
    {/* <Grid className="first-div"> */}
                    {data.map((item) => (
                        <Box h="450px"  className="second-div"  key={item.id}>
                            <Image  h="350px" w="500px"  onMouseEnter={e => (e.currentTarget.src = `${item.hoverImage}`)} onMouseLeave={e => (e.currentTarget.src = `${item.image}`)} src={item.image} alt="img"/>
                            <p className="para-1"><a href="/">{item.name}</a></p>
                            <p className="para-2">${item.price}.00</p>
                        </Box>
                    ))}
                {/* </Grid> */}
    </SimpleGrid>
   </Box>
   
    </Box>
  ) 
}
