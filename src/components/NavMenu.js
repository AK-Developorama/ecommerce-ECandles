import React, { useContext } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);

  return (
    <>
      <Drawer
        isOpen={isMenuOpen}
        onClose={closeMenu}
        placement="left"
        size="sm"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack p="2rem">
                <Link to="/">About Us</Link>
                <Link to="/">Learn More</Link>
                <Link to="/">Sustainability</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavMenu;
