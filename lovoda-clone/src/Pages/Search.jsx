import React from "react";
import "../Style/Search.css";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  RadioGroup,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  const navigate=useNavigate()
  const  handleKeyPress=(event)=>{
    if(event.key=="Enter")
    {

     return   navigate("/rings")
    }
}
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>

      <i onClick={onOpen} className="fi fi-rr-search"></i>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody className="DrwBody">
            <div className="InputDiv">
              <Input className="InputBox" type="text" placeholder="Search..." onKeyPress={handleKeyPress} />
              <i onClick={onClose} className="fi fi-rr-cross-small"></i>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Search;
