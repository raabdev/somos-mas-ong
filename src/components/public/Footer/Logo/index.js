import React, { useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";


export default function Logo({logo}) {

  return (
    <Box  >
    {/* <Box w={["200px", "200px", "250px", "300px"]}> */}
      <Image
        // boxSize={["200px", "200px", "250px", "300px"]}
        boxSize='120px'
        borderRadius="full"
        src={logo}
        alt="Logo"
       
      />
    </Box>
  );
}
