import React from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Center } from "@chakra-ui/react";

import Loading from "components/Loading";
import UsersForm from "../components/UsersForm";
import { useGetUserById, useUpdateUser } from "../hooks";

const FORM_TITLE = "Editar usuario";
const BUTTON_TEXT = "Actualizar";

export default function EditUsers() {
  const { user_id } = useParams();
  const { user, isLoading } = useGetUserById({ user_id });
  const { updateUser, isSubmiting } = useUpdateUser();

  const handleSubmit = user => {
    updateUser({ user_id, user });
  };

  return (
    <Container maxW="container.lg" my={"2rem"}>
      <Box w="100%" color="black" mt={"0.5rem"}>
        {isLoading ? (
          <Center my={"10rem"}>
            <Loading />
          </Center>
        ) : (
          <UsersForm
            formTitle={FORM_TITLE}
            buttonText={BUTTON_TEXT}
            user={user}
            handleSubmit={handleSubmit}
            isSubmiting={isSubmiting}
          />
        )}
      </Box>
    </Container>
  );
}
