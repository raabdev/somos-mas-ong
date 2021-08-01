import React from "react";
import {Link} from "react-router-dom";
import {Box, Image, Text, Heading} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {DateTime} from "luxon";
import {BASE_COLORS} from "const/baseColors";
import ReactHtmlParser from "react-html-parser";
import { lengthText } from "../../../../utils/lengthText"

const format = "dd LLL yyyy";

export default function TestimonialsCard({testimonial}) {
  let parsedDescription = ReactHtmlParser(testimonial.description)
  parsedDescription = parsedDescription[0].props.children + parsedDescription[0].props.children // To extract text to be shortened as it is returned as react component
  return (
    <Box
      w="300px"
      minH="400px"
      borderWidth="1px"
      m={4}
      boxShadow={"3px 5px 8px 0px rgba(50, 50, 50, 0.3)"}>
      <Box w="300px" h="250px">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          w="300px"
          h="250px"
          objectFit="cover"
        />
      </Box>
      <Box p="6">
        <Box mt="1">
          <Heading as="h4" size="md" mb={2} color={BASE_COLORS.BLUE}>
            {testimonial.name}
          </Heading>
        </Box>
        <Box>
          <Text fontSize="sm" minH="100px">
            {lengthText(parsedDescription,100)}
          </Text>
        </Box>
        <Box as="span" color="gray.600" fontSize="sm">
          {DateTime.fromISO(testimonial.created_at).toUTC().toFormat(format)}
        </Box>
        <Box mt={10}>
          <Link to={`/testimonials/${testimonial.id}`}>
            <Text
              fontSize="lg"
              color={BASE_COLORS.BLUE}
              fontWeight="semibold"
              _hover={{
                background: "white",
                color: "blue.500",
                textDecoration: "underline",
              }}>
              <ArrowForwardIcon /> VER MÁS
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
