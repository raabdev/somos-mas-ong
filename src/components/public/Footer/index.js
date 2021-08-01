import React from "react";
import { Logo } from "../../Logo";
import { Flex, SimpleGrid, GridItem, Link, Text } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom";
import SocialMedia from '../contact/FormContact/SocialMediaComponent';

export default function FooterContainer() {
  return (
    <Flex  color="black" direction="column" bg='#f4f4f4' wrap="wrap" pt='10px'>
      {/* First Row */}
      <SimpleGrid  columns={[1, null, 5]}  px={5}>
        {/* Left navbar component */}
        <GridItem mr={{ base: 0, md:'auto'}} colSpan={2}  h="100%" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" pt={2}>
          <Link as={ReactLink} to="/nosotros" ml={3}><Text mx={{base:'5px',sm:'5px',md:'20px', lg:'20px'}}>Nosotros</Text> </Link>
          <Link as={ReactLink} to="/activities" ml={3}><Text mx={{base:'5px',sm:'5px',md:'20px', lg:'20px'}}>Actividades</Text></Link>
          <Link as={ReactLink} to="/novelties" ml={3}><Text mx={{base:'5px',sm:'5px',md:'20px', lg:'20px'}}>Novedades</Text></Link>
        </GridItem>
        {/* Logo component */}
        <GridItem>
          <Logo marginX={"auto"}/>
        </GridItem>
        {/* Right navbar component */}
        <GridItem ml={{ base: 0, md:'auto'}} colSpan={2} h="100%" display="flex"  alignItems="center" justifyContent="center" flexWrap="wrap" pb={2}>
          <Link as={ReactLink} to="/testimonials" mr={3}><Text mx={{md:'20px', lg:'20px'}}>Testimonios</Text></Link>
          <Link as={ReactLink} to="/donate" mr={3}> <Text mx={{base:'5px',sm:'5px',md:'20px', lg:'20px'}}>Donar</Text></Link>
          <Link as={ReactLink} to="/contact" mr={3}><Text mx={{base:'5px',sm:'5px',md:'20px', lg:'20px'}}>Contacto</Text></Link>
        </GridItem>
      </SimpleGrid>
      {/* Second Row */}
      <Flex bg="#f4f4f4" py={4} direction="column" alignItems="center">
        {/* Contact icons */}
        <Flex mb={2}>
          <SocialMedia marginX={'10px'}/>
        </Flex>
        {/* Copyright */}
        <Flex>
          <Text>© 2021 by Alkemy. All Rights Reserved.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
