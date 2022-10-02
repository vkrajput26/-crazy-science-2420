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
            <Link to="/newarrivals">
              <div>New</div>
            </Link>
            <Link to="/ShopAll">
              <div>Shop All</div>
            </Link>
            <Link to="/earrings">
              <div>Earrings</div>
            </Link>
            <Link to="/necklaces">
              <div>Necklaces</div>
            </Link>
            <Link to="/bracelets">
              <div>Bracelets</div>
            </Link>
            <Link to="/rings">
              <div>Rings</div>
            </Link>
            <Link to="/shopsocial">
              <div>Shop Social</div>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default PlacementExample;
