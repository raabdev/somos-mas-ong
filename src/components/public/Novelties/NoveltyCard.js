import React from "react";
import { Box } from "@chakra-ui/layout";
import { Image, Button, Badge, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

export const NoveltyCard = ({
  titleCard,
  imgCard,
  descriptionCard,
  widthCard,
  content,
  widthImg,
  heightImg,
  marginTopImg,
  flexD,
  linkDetails,
  fontSize,
  maxTextHeight
}) => {
  return (
    <Box
      m="6"
      mb='1%'
      bg="white"
      maxW={widthCard}
      borderWidth="1px"
      d="flex"
      flexDirection={flexD}
      boxShadow={"3px 5px 8px 0px rgba(50, 50, 50, 0.3)"}
      justify="center"
      overflow="hidden"
    >
      <Image
        minH="250px"
        src={imgCard}
        w={widthImg}
        maxWidth={'100%'}
        objectFit={"cover"}
        h={heightImg}
        mx={"auto"}
        my={marginTopImg}
      />

      <Box p="3" h="100%" >
        <Box pt="3" h="100%" d="flex" flexDir="column">

          <Box d="flex">
            <Badge pl="3" ml="0" colorScheme="white">
              <Box color="#9ac9fb" fontSize="1.4em">
                Novedades
              </Box>
            </Badge>
          </Box>

          <Box
            fontWeight="semibold"
            fontSize={fontSize}
            lineHeight="tight"
            pl="3"
            pt="1"
            pb="4"
          >
            {titleCard}
          </Box>

          <Box pb="2" m="auto">
              <Text pl="3" color="gray.600" fontSize="1.1em">{ReactHtmlParser(content)}</Text>
          </Box>

          <Box p="3" color="gray.600">
            {descriptionCard}
          </Box>

          <Box pl="3" pt="1" pb="2" justifySelf="flex-end">
            <Link to={linkDetails}>
              <Button color="#9ac9fb" variant="link" fontSize="1.5em">
                <ArrowForwardIcon /> VER MÁS
              </Button>
            </Link>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default NoveltyCard;
