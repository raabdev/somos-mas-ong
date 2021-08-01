import { Container, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { aboutService } from "services/aboutService/aboutService";

function Description() {
  const [ description, setDescription ] = useState('')
  const handleClick = async () => {
    const { body } = await aboutService();
    setDescription(body)
  }
  return (
    <Container maxW="container.xl">
      <Box padding="3" bg="gray.100">
        <Text textAlign="justify">{description}</Text>
      </Box>
      {
        (description === '') 
        && 
          <button
            onClick={ handleClick }
          >
           Ver descripción
          </button>
      }
      
    </Container>
  );
}

export default Description;
