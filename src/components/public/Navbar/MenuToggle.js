import React from "react";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: "block", sm:'block',md: "none", lg:"none" }}
      onClick={toggle}
      fontSize='25px'
      color='black'
      position='relative'
      zIndex={100}
      
      
    >
       <HamburgerIcon />
    </Box>
  );
};
