import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";

export function Logo({marginX}) {
  // Image source path "./public/images/assets/logo.png"
  const logo = "/images/assets/logo.png";

  return (
    <Box w="150px" mx={marginX||5}>
      <Link to="/">
        <Image
          src={logo}
          alt="Logo"
        />
      </Link>
    </Box>
  );
}
