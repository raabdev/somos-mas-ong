import { Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const MenuItem = ({ children, to = "/" }) => {
  let location = useLocation();
  const color = location.pathname === to ? "Highlight" : "black";

  return (
    <Link to={to}>
      <Text py={[3, 3, 1, 1]} display="block" color={color} fontSize={{base:'15px',sm:'15px', md:'20px', lg:'20px' }} >
        {children}
      </Text>
    </Link>
  );
};
