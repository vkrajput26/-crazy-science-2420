import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, Heading, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useEffect,useState } from "react"; 
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "../Components/Pagination";
import "../styles/Rings.css";
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

const Rings = () => {
    const [data, setData] = useState([]);
    const [isLoading,setLoading] = useState(false);
    const [searchParam,setSearchParam]=useSearchParams();
    const [page, setPage] = useState(Number(searchParam.get("page")) || 1);
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("");
    const [greater, setGreater] = useState(0);
    const [less,setLess] = useState(50);

    const dispatch = useDispatch();
    const newarrivals = "rings";

    const handleId = () => {
        dispatch({type: "CART", payload: newarrivals})
    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://lovodaapi.onrender.com/rings?_page=${page}&_limit=16&_sort=${sort}&_order=${order}&price_gte=${greater}&price_lte=${less}`)
            .then((res) => res.json())
            .then((res)=>{
                setData(res) ;
                setLoading(false);  
        })
    }, [page,sort,order,greater,less]);

    useEffect(() => {
        setSearchParam({
        page,
        });
    }, [page,setSearchParam]);

    const handlePage = () => {
        page===1?setPage(2):setPage(1)
    };

    const handleChange = (e) => {
        // console.log(e.target.value)
        if (e.target.value === "name_ASC") {
            setSort("name")
            setOrder("ASC")
        }
        else if (e.target.value === "name_DESC")
        {
            setSort("name")
            setOrder("DESC")
        }
        else if (e.target.value === "price_ASC")
        {
            setSort("price")
            setOrder("ASC")
        }
        else if (e.target.value === "price_DESC")
        {
            setSort("price")
            setOrder("DESC")
        }
        else {
            setSort("")
            setOrder("")
        }
    };

    return (
        <>
        <Desktop>
        <Box className="main">
            <Heading className="heading6" fontWeight={"400"} fontSize={"4xl"}>Ring</Heading>
            {/* Sorting Starts */}
            <Flex my="1.5rem"  fontSize={"sm"} >
                <Flex  w="50%" alignItems={"center"} ml="1rem">
                    <Text ml="-13px" mr="1rem">Filter :</Text>
                    <Popover>
                    <PopoverTrigger>
                        <Text _hover={{cursor:"pointer"}}>Price<ChevronDownIcon /> </Text>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Highest Price is $40</PopoverHeader>
                        <PopoverBody>
                        <Flex alignItems="center" justifyContent="space-evenly" >
                        <Text>From $</Text>
                        <Input onChange={(e)=>setGreater(e.target.value)} w="30%"/>
                        <Text>To $</Text>
                        <Input onChange={(e)=>setLess(e.target.value)} w="30%"/>
                        </Flex>
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </Flex>
                <Flex  w="50%" alignItems={"center"} justifyContent="flex-end">
                    <Text mr="1rem">Sort By:</Text>
                    <Select w="40%" onChange={handleChange} >
                        <option  value="">Featured</option>
                        <option  value="name_ASC">Alphabetically A-Z</option>
                        <option value="name_DESC">Alphabetically Z-A</option>
                        <option  value = "price_ASC">Price Low to High</option>
                        <option  value = "price_DESC">Price High to Low</option>
                    </Select>
                </Flex>
                <Flex w="10%" mt="5px" ml="20px" fontSize="large">150 products</Flex>
            </Flex>
            {/* Products */}
            <Box mb="2" fontSize={"sm"}>
                {isLoading && <Flex justify={"center"}><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500'size='xl'/></Flex>}
                <Grid className="first-div">
                    {data.map((item) => (
                        <Link to={`/ProductpageDetail/${item.id}`}>
                        <GridItem onClick={handleId} className="second-div" key={item.id}>
                            <img className='image' onMouseEnter={e => (e.currentTarget.src = `${item.hoverImage}`)} onMouseLeave={e => (e.currentTarget.src = `${item.image}`)} src={item.image} alt="img"/>
                            <p className="para-1"><a href="/">{item.name}</a></p>
                            <p className="para-2">${item.price}.00</p>
                        </GridItem>
                        </Link>
                    ))}
                </Grid>
            </Box>
            <Pagination handlePage={handlePage} page={page} />
        </Box>
        </Desktop>
        
        <Tablet>
        <Box w={"90%"} m="auto" mt={"2rem"} mb={5}>
            <Heading textAlign={"left"} fontWeight={400} size={"lg"}>Ring</Heading>
            {/* Sorting Starts */}
            <Flex my="1.5rem"  fontSize={"sm"} >
                <Flex  w="50%" alignItems={"center"} ml="1rem">
                    <Text ml="-13px" mr="1rem">Filter :</Text>
                    <Popover>
                    <PopoverTrigger>
                        <Text _hover={{cursor:"pointer"}}>Price<ChevronDownIcon /> </Text>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Highest Price is $40</PopoverHeader>
                        <PopoverBody>
                        <Flex alignItems="center" justifyContent="space-evenly" >
                        <Text>From $</Text>
                        <Input onChange={(e)=>setGreater(e.target.value)} w="30%"/>
                        <Text>To $</Text>
                        <Input onChange={(e)=>setLess(e.target.value)} w="30%"/>
                        </Flex>
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </Flex>
                <Flex  w="50%" alignItems={"center"} justifyContent="flex-end">
                    <Text mr="1rem">Sort By:</Text>
                    <Select w="40%" onChange={handleChange} >
                        <option  value="">Featured</option>
                        <option  value="name_ASC">Alphabetically A-Z</option>
                        <option value="name_DESC">Alphabetically Z-A</option>
                        <option  value = "price_ASC">Price Low to High</option>
                        <option  value = "price_DESC">Price High to Low</option>
                    </Select>
                </Flex>
                <Flex w="10%" mt="5px" ml="20px" fontSize="large">150 products</Flex>
            </Flex>
            {/* Products */}
            <Box mb="2" fontSize={"sm"}>
                {isLoading && <Flex justify={"center"}><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500'size='xl'/></Flex>}
                <SimpleGrid columns={3} spacing={5}>
                    {data.map((item) => (
                        <Link to={`/ProductpageDetail/${item.id}`}>
                        <GridItem onClick={handleId} className="second-div" key={item.id}>
                            <img className='image' onMouseEnter={e => (e.currentTarget.src = `${item.hoverImage}`)} onMouseLeave={e => (e.currentTarget.src = `${item.image}`)} src={item.image} alt="img"/>
                            <p className="para-1"><a href="/">{item.name}</a></p>
                            <p className="para-2">${item.price}.00</p>
                        </GridItem>
                        </Link>
                    ))}
                </SimpleGrid>
            </Box>
            <Pagination handlePage={handlePage} page={page} />
        </Box>
        </Tablet>

        <Mobile>
        <Box w={"90%"} m="auto" mt={"2rem"} mb={5}>
            <Heading textAlign={"left"} fontWeight={400} size={"lg"}>Ring</Heading>
            {/* Sorting Starts */}
            <Flex mr="1.5rem"  fontSize={"2xs"} >
                <Flex  w="50%" alignItems={"center"} ml="1rem">
                    <Text ml="-13px" mr="1rem">Filter :</Text>
                    <Popover>
                    <PopoverTrigger>
                        <Text _hover={{cursor:"pointer"}}>Price<ChevronDownIcon /> </Text>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Highest Price is $40</PopoverHeader>
                        <PopoverBody>
                        <Flex alignItems="center" justifyContent="space-evenly" >
                        <Text>From $</Text>
                        <Input onChange={(e)=>setGreater(e.target.value)} w="30%"/>
                        <Text>To $</Text>
                        <Input onChange={(e)=>setLess(e.target.value)} w="30%"/>
                        </Flex>
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </Flex>
                <Flex  w="50%" alignItems={"center"} justifyContent="flex-end">
                    <Text mr="1rem">Sort By:</Text>
                    <Select w="40%" onChange={handleChange} >
                        <option  value="">Featured</option>
                        <option  value="name_ASC">Alphabetically A-Z</option>
                        <option value="name_DESC">Alphabetically Z-A</option>
                        <option  value = "price_ASC">Price Low to High</option>
                        <option  value = "price_DESC">Price High to Low</option>
                    </Select>
                </Flex>
                <Flex w="10%" mt="5px" ml="20px" fontSize="large">150 products</Flex>
            </Flex>
            {/* Products */}
            <Box mb="2" fontSize={"sm"}>
                {isLoading && <Flex justify={"center"}><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500'size='xl'/></Flex>}
                <SimpleGrid columns={2} spacing={5}>
                    {data.map((item) => (
                        <Link to={`/ProductpageDetail/${item.id}`}>
                        <GridItem onClick={handleId} className="second-div" key={item.id}>
                            <img className='image' onMouseEnter={e => (e.currentTarget.src = `${item.hoverImage}`)} onMouseLeave={e => (e.currentTarget.src = `${item.image}`)} src={item.image} alt="img"/>
                            <p className="para-1"><a href="/">{item.name}</a></p>
                            <p className="para-2">${item.price}.00</p>
                        </GridItem>
                        </Link>
                    ))}
                </SimpleGrid>
            </Box>
            <Pagination handlePage={handlePage} page={page} />
        </Box>
        </Mobile>
        </>
    );
};

export default Rings;