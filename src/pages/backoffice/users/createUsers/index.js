import React from "react";
import { Container, Box } from "@chakra-ui/react";

import UsersForm from "../components/UsersForm";
import { useSaveUser } from "../hooks";

const FORM_TITLE = "Crear usuario";
const BUTTON_TEXT = "Registrar";

export default function CreateUsersPage() {
  const { saveUser, isSubmiting } = useSaveUser();

  const handleSubmit = user => {
    saveUser({ user });
  };

  return (
    <Container maxW="container.lg" my={"2rem"}>
      <Box w="100%" color="black" mt={"0.5rem"}>
        <UsersForm
          formTitle={FORM_TITLE}
          buttonText={BUTTON_TEXT}
          handleSubmit={handleSubmit}
          isSubmiting={isSubmiting}
        />
      </Box>
    </Container>
  );
}
