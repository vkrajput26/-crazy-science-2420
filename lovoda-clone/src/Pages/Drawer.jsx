import React from "react";
import { Link } from "react-router-dom";
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
          <DrawerHeader borderBottomWidth="1px"></DrawerHeader>
          <DrawerBody>
            <i onClick={onClose} className="fi fi-rr-cross-small"></i>
            <Link to="/">
              {" "}
              <p>Home</p>
            </Link>
            <p>New</p>
            <p>Shop All</p>
            <p>Earing</p>
            <p>Necklaces</p>
            <p>Bracelets</p>
            <p>Rings</p>
            <Link to="/shopsocial">
              {" "}
              <p>Shop social</p>{" "}
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default PlacementExample;
