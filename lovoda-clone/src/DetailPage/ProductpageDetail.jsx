import { Badge, Box, Button, Divider, Flex, Heading, Icon, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { TbStar } from "react-icons/tb";
import {IoChatbubblesOutline} from "react-icons/io5";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {BsCart3, BsSuitHeart} from "react-icons/bs";
import { MyButton } from "./MyButton";
import { useEffect, useState } from "react";

const DetailedEarrings = () => {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch(`https://lovodaapi.herokuapp.com/api/earrings`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data)
            setData(res.data)
            // console.log(data)
        })
    }, []);
    console.log(data)
    return(
        <Box border={"1px solid red"}>
            <Box w="70%" m="auto">
                <Flex>
                    <Box border={"1px solid green"} w="65%" >
                        <Image />
                        <Flex mt="0.5rem" gap="0.5rem">
                            <Image/>
                            <Image/>
                        </Flex>
                    </Box>

                    <Box p="1rem" pr="0" pos="sticky" top="0" h="600px" w="35%">
                        <Box>
                            <Text textAlign={"left"} fontSize={"xs"}>LOVODA</Text>

                            <Heading textAlign={"left"} mb="1rem" fontWeight={"sm"}>name</Heading>

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

                            <Text marginTop={"12px"} textAlign={"left"} fontSize={"lg"}>$price</Text>

                            <Flex>
                            <Badge marginTop={"13px"} borderRadius={"25px"} mr="32px" padding="2px 15px 2px 15px" colorScheme={"green"}>After Pay</Badge><Text marginLeft={"-25px"} mt={"12px"} fontSize={"12px"} as={"span"}>available for orders between $35 - $1,000 ⓘ</Text>
                            </Flex>
                            
                            <Text mt={"7px"} textAlign={"left"} fontSize={"12px"}>Shipping calculated at checkout.</Text>

                            <Flex>
                            <Text marginTop={"10px"} textAlign={"left"} as="span" fontSize={"xs"}>Pay in 4 interest-free installments for orders over $50 with <Badge colorScheme={"blue"}>Shop Pay</Badge>    Learn more</Text></Flex>

                            <Box mt="1.5rem">
                                <Text textAlign={"left"} fontSize={"md"} >Quantity</Text>
                                <Flex mt="0.3rem" border="1px solid " w="40%" justifyContent={"center"}>
                                    <Box _hover={{cursor:"pointer"}} px="3" py="2"  mr="-3"><MinusIcon  h={3} w={3} /></Box>
                                    <Box _hover={{cursor:"pointer"}} px="3" py="2" mr="-2"><Text fontSize={"md"}>quantity</Text></Box>
                                    <Box _hover={{cursor:"pointer"}} px="3"py="2" mr="3"><AddIcon h={3} w={3} /></Box>
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

                <Box mt={"30px"} border={"1px solid red"}>
                    <Box w={"60%"}>
                        <Text mr={"8rem"} fontSize={"18px"}>Free Shipping</Text>
                        <Text ml={"9rem"} fontSize={"15px"}>Free shipping for orders over $75! Only applicable for US.</Text>
                    </Box>
                    <Box>
                        <Heading color={"grey"} textAlign={"left"} mt={"50px"} fontSize={"15px"} >CUSTOMER REVIEWS</Heading>
                    </Box>
                    <Box>
                        <Stack  direction='row' spacing={4} align='center'>
                            <Button ml={"50rem"} colorScheme='pink' _hover={{bgColor:"pink"}} variant='outline'>Ask a question</Button>
                            <Button colorScheme='pink' _hover={{bgColor:"pink"}} variant='outline'>Ask a review</Button>
                        </Stack>
                    </Box>
                    <Box border={"1px solid black"}>4</Box>
                    <hr/>
                    <Box>
                        <Text mt={"1rem"} textAlign={"left"} fontSize={"15px"}>Be the first to write a review</Text>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
};

export default DetailedEarrings;