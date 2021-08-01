import React, { useEffect } from "react";
import useFetch from "hooks/useFetch";
import { showError } from "services/Alert/alerts";
import { Center, SimpleGrid, Box } from "@chakra-ui/layout";
import ActivitiesList from "./components/ActivitiesList";
import Loader from "components/Loading";
import { Title } from "components/public/SectionTitle/Title";

export const Activities = () => {
  // Fetchea la data de la API
  const { response, loading, error, fetchData } = useFetch();
  // Aca estoy usando Optional chaining para traer los datos de la API
  const activities = response?.data;

  useEffect(() => {
    fetchData("http://ongapi.alkemy.org/api/activities");
            // eslint-disable-next-line
  }, []);

  if (error) {
    showError(
      "Problema de conexión",
      "Problema de conexión con el servidor, no se pudieron recuperar los datos"
    );
  }

  return (
    <Box bg="#FFFF" m="0px">
      <div className="div-background" style={{background: "linear-gradient(to left, #0000005b, #1213138a, #0f2027aa), url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>           
        <div style={{width:"100%"}}>
          <h2>Nuestras actividades</h2>       
          <div>
            <p>Estamos llevando adelante actividades en las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.</p>
          </div>
        </div>     
      </div>
      <Title title="Actividades" />
      {loading && (
        <Center my="250px">
          <Loader />
        </Center>
      )}
      <Center marginBottom={20}>
        <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing="35px" mx={2}>
          <ActivitiesList activities={activities} />
        </SimpleGrid>
      </Center>
    </Box>
  );
};
