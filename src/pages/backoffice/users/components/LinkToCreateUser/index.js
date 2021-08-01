import React from "react";
import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export default function LinkToCreateUser() {
  return (
    <Link to="/backoffice/users/create" > 
    <Button 
        color="#DB5752"
        backgroundColor="transparent"
        fontWeight="700"
        fontSize="1.3rem"
        mt={{base: ".5rem", sm:".5rem", md:"5rem", lg:"5rem", xl:"5rem"}}                        
        mb={{base: ".5rem", sm:".5rem", md:"0", lg:"0", xl:"0"}}                        
        alignItems="center"
        _hover={{ bg: "#DB5752", color:"#FFF" }}
    >Agregar</Button>
    </Link>
  );
}
