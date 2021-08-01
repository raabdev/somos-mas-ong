import {Center, Box} from "@chakra-ui/layout";
import {Image, Text} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useParams} from "react-router";
import useFetch from "../../../hooks/useFetch";
import {showError} from "../../../services/Alert/alerts";
import Loader from "../../Loading";
import ReactHtmlParser from "react-html-parser";
import {formatDate} from "../Novelties/const/index";
import {Link} from "react-router-dom";

const TestimonialsDetail = () => {
  const {id} = useParams();

  const {response, loading, error, fetchData} = useFetch();

  useEffect(() => {
    fetchData("http://ongapi.alkemy.org/api/testimonials/" + id);
            // eslint-disable-next-line
  }, []);

  const testimonial = response?.data;

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
      w={{base: "90%", lg: "50%"}}
      minH="100vh"
      m="auto"
      bg="white"
      borderWidth="1px"
      d="flex"
      flexWrap="wrap"
      justifyContent="center"
      overflow="hidden">
      <Box d="flex" m="auto">
        <Image
          src={testimonial?.image}
          maxWidth={"fit-content"}
          maxHeight={"20vh"}
        />
        <Box p="3" d="flex" flexWrap="wrap" alignItems="center">
          <Text
            w="100%"
            fontWeight="semibold"
            fontSize={"2em"}
            lineHeight="tight"
            wordBreak="break-word"
            pl="3"
            pt="1"
            pb="2">
            {testimonial?.name}
          </Text>

          <Box d="flex">
              <Text pl="3" color="#9ac9fb" fontSize="0.9em" fontWeight="700" textTransform="uppercase" wordBreak="break-word">
                {"Testimonio enviado el: " + formatDate(testimonial?.created_at)}
              </Text>
          </Box>
        </Box>
      </Box>

      <Box p="3" textAlign="justify" m="auto">
        <Text color="gray.600" fontSize="1.1em">
          {ReactHtmlParser(testimonial?.description)}
        </Text>
      </Box>

      <Box
        p={3}
        color="gray.600"
        fontSize="1em"
        textDecoration="underline"
        margin="auto">
        <Link to={"/testimonials"}>
          <Text>{"VOLVER"}</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default TestimonialsDetail;
