import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { BASE_COLORS } from "const/baseColors";
import DonateButton from "./DonateButton"
import ContactButton from "./ContactButton"

export function DonateCard({ title, description, image, imageAlt, button }) {
  return (
    <Box
      w="300px"
      minH="400px"
      borderWidth="1px"
      m={4}
      boxShadow="md"
      pb='10px'
    >
      <Box w="300px" h="250px">
        <Image
          src={image}
          alt={imageAlt}
          w="300px"
          h="250px"
          objectFit="cover"
        />
      </Box>
      <Box p="3">
        <Box mt="1">
          <Heading as="h4" size="md" mb={2} color={BASE_COLORS.BLUE}>
            {title}
          </Heading>
        </Box> 
        <Box>
          <Text fontSize="sm" minH="100px">
            {description}
          </Text>
        </Box>
      </Box>
      {button === "donate" ? <DonateButton /> : <ContactButton />}
    </Box>
  );
}
