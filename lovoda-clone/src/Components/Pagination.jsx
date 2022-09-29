import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex } from "@chakra-ui/react"

export const Pagination = ({handlePage,page}) => {
    return (   
        <Flex justifyContent={"center"} gap="0.5rem" alignItems={"center"} p="2">
            <Button disabled={page === 1} onClick={handlePage} rightIcon={<ArrowBackIcon
            />} colorScheme='teal' variant='outline'>Prev</Button>
            <Button disabled={page===2} onClick={handlePage} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>Next</Button>
        </Flex>
    );
};