import { Box, Button, Flex, Heading, Image, SimpleGrid, Table, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";

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


export const CustomerReviews = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        // setLoading(true);
        fetch(`https://lovodaapi.herokuapp.com/api/newarrivals?_page=1&_limit=4`)
            .then((res) => res.json())
            .then((res)=>{
                setData(res) ;
        })
    }, []);
  return (
    <>
    <Desktop>
    <Box w="80%" m="auto">
    <Heading textAlign="left" size="sm">CUSTOMER REVIEWS</Heading>
    <Flex mb={5} justifyContent="right"><Button fontSize="14px" _hover={{backgroundColor:"#c9ac92",color:"white"}} variant="outline" colorScheme="orange" color="#c9ac92" mr={1}>Ask a question</Button>
    <Button  fontSize="14px" _hover={{backgroundColor:"#c9ac92",color:"white"}} variant="outline" colorScheme="orange" color="#c9ac92" >Add a review</Button></Flex>
   <Box mb={10}>
    <Tabs>
  <TabList>
    <Tab  _selected={{ color: 'black',fontWeight:"bold",borderBottom:"3px solid #c9ac92" }}>Reviews</Tab>
    <Tab  _selected={{ color: 'black',fontWeight:"bold",borderBottom:"3px solid #c9ac92" }}>Questions</Tab>
   
  </TabList>

  <TabPanels>
    <TabPanel>
      <Text align="left" fontSize="15px">Be the first to write a review</Text>
    </TabPanel>
    <TabPanel>
    <Text align="left" fontSize="15px">If you have any questions, please drop us a line with your question.</Text>
    </TabPanel>
    
  </TabPanels>
</Tabs>
   </Box>
   <Box>
    <Text mb={5} align="left" fontSize="22px">You may also like</Text>

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
    </Desktop>
    <Tablet>
    <Box w="90%" m="auto">
    <Heading textAlign="left" size="sm">CUSTOMER REVIEWS</Heading>
    <Flex mb={5} justifyContent="right"><Button fontSize="14px" _hover={{backgroundColor:"#c9ac92",color:"white"}} variant="outline" colorScheme="orange" color="#c9ac92" mr={1}>Ask a question</Button>
    <Button  fontSize="14px" _hover={{backgroundColor:"#c9ac92",color:"white"}} variant="outline" colorScheme="orange" color="#c9ac92" >Add a review</Button></Flex>
   <Box mb={10}>
    <Tabs>
  <TabList>
    <Tab  _selected={{ color: 'black',fontWeight:"bold",borderBottom:"3px solid #c9ac92" }}>Reviews</Tab>
    <Tab  _selected={{ color: 'black',fontWeight:"bold",borderBottom:"3px solid #c9ac92" }}>Questions</Tab>
   
  </TabList>

  <TabPanels>
    <TabPanel>
      <Text align="left" fontSize="15px">Be the first to write a review</Text>
    </TabPanel>
    <TabPanel>
    <Text align="left" fontSize="15px">If you have any questions, please drop us a line with your question.</Text>
    </TabPanel>
    
  </TabPanels>
</Tabs>
   </Box>
   <Box>
    <Text mb={5} align="left" fontSize="22px">You may also like</Text>

    <SimpleGrid mb={10} columns={2} spacing={2}>
    {/* <Grid className="first-div"> */}
                    {data.map((item) => (
                        <Box  className="second-div"  key={item.id}>
                            <img  className='image'  onMouseEnter={e => (e.currentTarget.src = `${item.hoverImage}`)} onMouseLeave={e => (e.currentTarget.src = `${item.image}`)} src={item.image} alt="img"/>
                            <p className="para-1"><a href="/">{item.name}</a></p>
                            <p className="para-2">${item.price}.00</p>
                        </Box>
                    ))}
                {/* </Grid> */}
    </SimpleGrid>
   </Box>
   </Box>
    </Tablet>
    <Mobile>
    <Box w="90%" m="auto">
    <Heading textAlign="left" size="sm">CUSTOMER REVIEWS</Heading>
    <Flex mt={5} mb={5} justifyContent="right"><Button fontSize="14px" _hover={{backgroundColor:"#c9ac92",color:"white"}} variant="outline" colorScheme="orange" color="#c9ac92" mr={1}>Ask a question</Button>
    <Button  fontSize="14px" _hover={{backgroundColor:"#c9ac92",color:"white"}} variant="outline" colorScheme="orange" color="#c9ac92" >Add a review</Button></Flex>
   <Box mb={10}>
    <Tabs>
  <TabList>
    <Tab  _selected={{ color: 'black',fontWeight:"bold",borderBottom:"3px solid #c9ac92" }}>Reviews</Tab>
    <Tab  _selected={{ color: 'black',fontWeight:"bold",borderBottom:"3px solid #c9ac92" }}>Questions</Tab>
   
  </TabList>

  <TabPanels>
    <TabPanel>
      <Text align="left" fontSize="15px">Be the first to write a review</Text>
    </TabPanel>
    <TabPanel>
    <Text align="left" fontSize="15px">If you have any questions, please drop us a line with your question.</Text>
    </TabPanel>
    
  </TabPanels>
</Tabs>
   </Box>
   <Box>
    <Text mb={5} align="left" fontSize="22px">You may also like</Text>

    <SimpleGrid mb={10} columns={2}  spacing={2}>
    {/* <Grid className="first-div"> */}
                    {data.map((item) => (
                        <Box h="350px" className="second-div"  key={item.id}>
                            <img  h="300px"  onMouseEnter={e => (e.currentTarget.src = `${item.hoverImage}`)} onMouseLeave={e => (e.currentTarget.src = `${item.image}`)} src={item.image} alt="img"/>
                            <p className="para-1"><a href="/">{item.name}</a></p>
                            <p className="para-2">${item.price}.00</p>
                        </Box>
                    ))}
                {/* </Grid> */}
    </SimpleGrid>
   </Box>
   </Box>
    </Mobile>
    </>
 
  )
}
