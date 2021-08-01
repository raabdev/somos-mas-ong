import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { DropDown } from "./DropDown";
// import { MenuItemSubItem } from "./MenuItemSubItem";

export const MenuLinks = ({ links }) => {

  return (
    <Box
      display={{ base: "none", sm: "none", md: "block", lg: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      width="100%"
      mr='10%'
      // backgroundColor='red'
    >
      <Stack
        width="100%"
        spacing={[0, 0, '5px','20px']}
        align="center"
        display="flex"
        justify={{md:"flex-start", xl:"center"}}
        direction={["column", "column", "row", "row"]}
        py={[4, 4, 0, 0]}
      >
        {links.map(link => {
            if(link.name){
              return <MenuItem to={link.path} key={link.id}>
              {link.name}
            </MenuItem>
            }
            })}


        <DropDown />
      </Stack>
    </Box>
  );
};

/* Se elimina el submenu de actividades para tener el 
     mismo diseño en todo el navbar */

// return link.linkText === "Actividades" ? (
//   <MenuItemSubItem />
// ) : (
//   <MenuItem to={link.href} key={link.id}>
//     {link.linkText}
//   </MenuItem>
// );
