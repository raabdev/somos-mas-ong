import { Flex } from "@chakra-ui/react";

export const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align={["center", "center", "center", "center"]}
      justify={[
        "space-between",
        "space-between",
        "left",
        "left",
        "left",
      ]}
      bg='#ffff'
      
      direction={["row", "row", "row", "row"]}     
      w="100%"     
      m='0px'
      h='70px'
      position='relative'      
      color={["white", "white", "white", "white"]}
      fontSize={["small", "small", "medium", "medium"]}
      {...props}
      
    >
      {children}
    </Flex>
  );
};