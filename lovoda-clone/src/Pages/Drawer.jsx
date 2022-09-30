import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  RadioGroup,
  useDisclosure,
} from "@chakra-ui/react";

function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>

      <i onClick={onOpen} class="fi fi-rr-menu-burger "></i>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
          
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default PlacementExample;
