import React, { useRef } from "react";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { Button, useDisclosure } from "@chakra-ui/react";
import { IconMenu } from "../icons";

export interface IMenuProps {
  list: {
    categoryName: string;
    id: string;
  }[];
}

export const Menu = (props?: IMenuProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={btnRef} onClick={onToggle}>
        <IconMenu />
      </Button>
      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} finalFocusRef={btnRef} isFullHeight>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
