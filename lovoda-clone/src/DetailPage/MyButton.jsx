import { Button, Icon } from "@chakra-ui/react"

export const MyButton = ({task,icon,addTocart}) => {
    return (
        <Button onClick={addTocart} leftIcon={<Icon as={icon} />} bgColor={"white"} borderRadius="none" _hover={{ bgColor: "white" }} border="1px solid black">{task}</Button> 
    )
}   