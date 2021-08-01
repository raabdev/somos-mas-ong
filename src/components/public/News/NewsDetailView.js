import { Center, Box } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "hooks/useFetch";
import { showError } from "services/Alert/alerts";
import Loader from "../../Loading";
import ReactHtmlParser from "react-html-parser";
import { formatDate } from "../Novelties/const/index";
import { Link } from "react-router-dom";

const NewsDetailView = () => {
  const { id } = useParams();

  const { response, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData("http://ongapi.alkemy.org/api/news/" + id);
            // eslint-disable-next-line
  }, []);

  const news = response?.data;

  if (error) {
    showError(
      "Problema de conexión",
      "Problema de conexión con el servidor, no se pudieron recuperar los datos"
    );
  }

  if (loading) {
    return (
      <Center mt="30px">
        {" "}
        <Loader />{" "}
      </Center>
    );
  }

  return (
    <Box
      w={{ base: "90%", lg: "50%" }}
      m="auto"
      mb={8}
      bg="white"
      borderWidth="1px"
      d="flex"
      flexWrap="wrap"
      justifyContent="center"
      overflow="hidden"
    >
      <Image
        src={news?.image}
        alt={news?.name}
        w="100%"
        h="250px"
        objectFit="cover"
      />
      {/* <Image src={news?.image} maxWidth={"fit-content"} maxHeight={"20vh"} /> */}
      <Box p="3" d="flex" flexDir="column" w="100%">
        <Text
          w="100%"
          fontWeight="semibold"
          fontSize={"2em"}
          lineHeight="tight"
          wordBreak="break-word"
          pl="3"
          pt="1"
          pb="2"
        >
          {news?.name}
        </Text>

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
            {formatDate(news?.created_at)}
          </Text>
        </Box>

        <Box p="3" textAlign="justify" m="auto">
          <Text color="gray.600" fontSize="1.1em">
            {ReactHtmlParser(news?.content)}
          </Text>
        </Box>

        <Box
          p={3}
          color="gray.600"
          fontSize="1em"
          textDecoration="underline"
          margin="auto"
        >
          <Link to={"/novelties"}>
            <Text>{"VOLVER"}</Text>
          </Link>
        </Box>

      </Box>
    </Box>
  );
};

export default NewsDetailView;
