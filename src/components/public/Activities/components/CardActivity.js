import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import HtmlText from "./HtmlText";
import { formatDate } from "../const";
import { BASE_COLORS } from "const/baseColors";

export function CardActivity({ activity }) {
  return (
    <Box w="300px" minH="400px" borderWidth="1px" m={4} boxShadow={"3px 5px 8px 0px rgba(50, 50, 50, 0.3)"}>
      <Box w="300px" h="250px">
        <Image
          src={activity.image}
          alt={activity.name}
          w="300px"
          h="250px"
          objectFit="cover"
        />
      </Box>
      <Box p="6">
        <Box mt="1" minH="50px">
          <Heading as="h4" size="md" mb={2} color={BASE_COLORS.BLUE}>
            {activity.name}
          </Heading>
        </Box>
        <Box>
          <Text fontSize="sm" minH="150px">
            <HtmlText text={activity.description} />
          </Text>
        </Box>
        <Box as="span" color="gray.600" fontSize="sm" minH="10px">
          {formatDate(activity.created_at)}
        </Box>
        <Box mt={10} minH="30px">
          <Link to={`/activities/${activity.id}`}>
            <Text
              fontSize="lg"
              color={BASE_COLORS.BLUE}
              fontWeight="semibold"
              _hover={{
                background: "white",
                color: "blue.500",
                textDecoration: "underline",
              }}
            >
              <ArrowForwardIcon /> Ver más
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
