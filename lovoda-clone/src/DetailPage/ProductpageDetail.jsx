import { Badge, Box, Button, Divider, Flex, Heading, Icon, Image, Stack, Text} from "@chakra-ui/react";
import { TbStar } from "react-icons/tb";
import {IoChatbubblesOutline} from "react-icons/io5";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {BsCart3, BsSuitHeart} from "react-icons/bs";
import { MyButton } from "./MyButton";
import { useEffect, useState } from "react";
import { CustomerReviews } from "../Pages/CustomerReviews";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const DetailedEarrings = () => {
    const [data, setData] = useState({});
    console.log(data);
    const {id}=useParams();
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();

    const cart = useSelector((state)=>
    state.CartReducer.cart
    );

    console.log(cart);

    useEffect(() => {
        axios.get(`https://lovodaapi.herokuapp.com/api/${cart}/${id}`)
            .then((res) => {
            setData(res.data) 
        })
    }, []);

    return(
        <Box marginTop={"30px"}>
            <Box w="70%" m="auto">
                <Flex>
                    <Box cursor={"pointer"} w="70%" >
                        <Image box-shadow= {"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"} w={"100%"} src={data.image} />
                        <Flex mt="0.5rem" gap="0.5rem">
                            <Image box-shadow= {"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"} w={"49.5%"} src={data.hoverImage}/>
                            <Image box-shadow= {"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"} w={"49.4%"} src={data.image}/>
                        </Flex>
                    </Box>

                    <Box p="1.5rem" marginBottom={5} pr="0" pos="sticky" top="0" h="600px" w="35%">
                        <Box>
                            <Text textAlign={"left"} fontSize={"xs"}>LOVODA</Text>

                            <Heading textAlign={"left"} mb="1rem" fontWeight={"sm"}>{data.name}</Heading>

                            <Flex alignItems={"center"}>
                                {new Array(5).fill(0).map((i) => (
                                    <Icon color="#f7cf00" mx="0.1rem" as={TbStar} />
                                ))}
                                <Text ml={"3px"} fontSize={"sm"} as={"span"}>Write a review</Text>
                            </Flex>

                            <Flex marginTop={"10px"} gap="0.2rem" alignItems={"center"}>
                                <Divider orientation="vertical" />
                                <Icon as={IoChatbubblesOutline} />
                                <Text fontWeight={"sm"} fontSize={"sm"}>Ask a question</Text>
                            </Flex>

                            <Text marginTop={"12px"} textAlign={"left"} fontSize={"lg"}>${data.price}.00</Text>

                            <Flex>
                            <Badge marginTop={"13px"} borderRadius={"25px"} mr="32px" padding="2px 15px 2px 15px" colorScheme={"green"}>After Pay</Badge><Text marginLeft={"-25px"} mt={"12px"} fontSize={"12px"} as={"span"}>available for orders between $35 - $1,000 ⓘ</Text>
                            </Flex>
                            
                            <Text mt={"7px"} textAlign={"left"} fontSize={"12px"}>Shipping calculated at checkout.</Text>

                            <Flex>
                            <Text marginTop={"10px"} textAlign={"left"} as="span" fontSize={"xs"}>Pay in 4 interest-free installments for orders over $50 with <Badge colorScheme={"blue"}>Shop Pay</Badge>    Learn more</Text></Flex>

                            <Box mt="1.5rem">
                                <Text textAlign={"left"} fontSize={"md"} >Quantity</Text>
                                <Flex alignItems={"center"} mt="0.3rem" border="1px solid " w="40%" justifyContent={"center"}>
                                    <Button variant={"ghost"} disabled={quantity ===1} onClick={() => setQuantity((prev) => prev-1)} _hover={{cursor:"pointer"}}  mr="-3"><MinusIcon  h={3} w={3} /></Button>
                                    <Box _hover={{cursor:"pointer"}}  px="3" py="2" mr="-2"><Text ml={1} mr={1} fontSize={"md"}>{quantity}</Text></Box>
                                    <Button variant={"ghost"} onClick={() => setQuantity((prev) => prev+1)} _hover={{cursor:"pointer"}} px="3"py="2" mr="3"><AddIcon h={3} w={3} /></Button>
                                </Flex>
                            </Box>  

                            <Flex my="1.5rem" direction="column" gap="0.5rem">
                                <MyButton task="Add to cart" icon={BsCart3} />
                                <MyButton task="Add to wishlist" icon={BsSuitHeart} />
                                <Button bgColor={"black"} color="white" _hover={{bgColor:"black"}} borderRadius="none" border="1px solid black">Buy it Now</Button> 
                            </Flex>
                        </Box>
                    </Box>
                </Flex>

                <Box mt={"30px"}>
                    <Box >
                        <Text mt={"3rem"} mr={"35rem"} fontSize={"18px"}>Free Shipping</Text>
                        <Text marginBottom={10} mt={"0.5rem"}  mr={"18rem"} fontSize={"15px"}>Free shipping for orders over $75! Only applicable for US.</Text>
                    </Box>
                </Box>

            </Box>
            <CustomerReviews/>
        </Box>
    )
};

export default DetailedEarrings;