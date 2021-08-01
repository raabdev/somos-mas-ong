import { Center, Box, Container, Flex } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "hooks/useFetch";
import { showError } from "services/Alert/alerts";
import Loader from "components/Loading";
import { Image, Text } from "@chakra-ui/react";
import ReactHtmlParser from "react-html-parser";
import { formatDate } from "../const";
import { Link } from "react-router-dom";

const ActivityDetails = () => {
  // Aca estoy trayendo el id que viene desde el path del Route de publicWebArray
  // <Route path={/activities/:id}>
  const { id } = useParams();
  // Fetchea la data de la API
  const { response, loading, error, fetchData } = useFetch();
  // Aca estoy usando Optional chaining para traer los datos de la API
  const activity = response?.data;

  useEffect(() => {
    fetchData("http://ongapi.alkemy.org/api/activities/" + id);
            // eslint-disable-next-line
  }, []);

  if (error) {
    showError(
      "Problema de conexión",
      "Problema de conexión con el servidor, no se pudieron recuperar los datos"
    );
  }

  if (loading) {
    return (
      <Center mt="30px">
        <Loader />
      </Center>
    );
  }

  return (
    <Container  height={{base: "auto", md: "calc(100vh - 290px)" }} maxW="container.lg">
      {/* Activities Card */}
      <Flex
        my={"24px"}
        borderWidth="1px"
        flexWrap="wrap"
        justifyContent="center"
        overflow="hidden"
      >
        {/* Card Image Section */}
        <Image
          src={activity?.image}
          alt={activity?.name}
          w="100%"
          h="200px"
          objectFit="cover"
        />
        {/* Card Text Section */}
        <Box p="3" d="flex" flexDir="column" w="100%">
          {/* Activity name */}
          <Text
            w="100%"
            fontWeight="semibold"
            fontSize={{base: "1.5rem", md: "2rem"}}
            lineHeight="tight"
            wordBreak="break-word"
            pl="3"
            pt="1"
            pb="2"
          >
            {activity?.name}
          </Text>
          {/* Activity type and date */}
          <Box d="flex">
            <Text
              pl="3"
              color="#9ac9fb"
              fontSize="0.9em"
              fontWeight="700"
              textTransform="uppercase"
              wordBreak="break-word"
            >
              {"Novedades - "}
              {formatDate(activity?.created_at)}
            </Text>
          </Box>
          {/* Activity description text */}
          <Box p="3" textAlign="justify">
            <Text color="gray.600" fontSize="1.1em">
              {ReactHtmlParser(activity?.description)}
            </Text>
          </Box>
          {/* Button to get back to activities */}
          <Box
            p={3}
            color="gray.600"
            fontSize="1em"
            textDecoration="underline"
            margin="auto"
          >
            <Link to={"/activities"}>
              <Text>{"VOLVER"}</Text>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ActivityDetails;
