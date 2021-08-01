import { Box, Center, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

const OrganizationData = ({ organization }) => {
  return (
    <Box w={"100%"} h={"100%"}  d="flex" justifyContent="center" mb="3rem">
      <Grid
        boxShadow="lg"
        templateColumns={{ base: "1fr", lg:"1fr 2fr" }}
        templateRows={{ base: "auto auto auto auto auto auto"}}
        templateAreas={{
          base: '"welcome" "name" "shortDescription" "logo" "longDescription" "contact"',
          lg: '"welcome welcome welcome" "name longDescription longDescription" "logo longDescription longDescription" "shortDescription longDescription longDescription" "contact contact contact"'
        }}
      >
        {/* First row */}
        {/* Organization name */}
        <Center gridArea="name" p={4}>
          <Heading textAlign="center">{organization.name}</Heading>
        </Center>
        {/* Organization logo image */}
        <Center gridArea="logo" bg="" p={4}>
          <Image src={organization.logo} boxShadow="base"></Image>
        </Center>
        {/* Organization short description */}
        <Center gridArea="shortDescription" p={4}>
          <Text fontSize="2xl" as="i">{organization.short_description}</Text>
        </Center>
        {/* Second row */}
        {/* Organization welcome text */}
        <Center gridArea="welcome" p={4} bg="#6898C8" textColor="white">
          <Text fontSize="4xl" textAlign="center">{organization.welcome_text}</Text>
        </Center>
        {/* Organization long description */}
        <Center gridArea="longDescription" p={{ base: 6, md: 8 }}>
          <Text fontSize="xl" textAlign="justify" as="i">{organization.long_description}</Text>
        </Center>
        {/* Organization contact info */}
        <Center gridArea="contact" p={4} bg="#6898C8" textColor="white" flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "center" }}>
          {/* Organization address */}
          <Flex flexDirection="column" textAlign="center" w={170} m={2} p={3} border="1px">
            <Text fontSize="lg" fontWeight={700}>Dirección:</Text>
            <Text fontSize="lg">{organization.address}</Text>
          </Flex>
          {/* Organization phone */}
          <Flex flexDirection="column" textAlign="center" w={170} m={2} p={3} border="1px">
            <Text fontSize="lg" fontWeight={700}>Telefono fijo:</Text>
            <Text fontSize="lg">{organization.phone}</Text>
          </Flex>
          {/* Organization cellphone */}
          <Flex flexDirection="column" textAlign="center" w={170} m={2} p={3} border="1px">
            <Text fontSize="lg" fontWeight={700}>Telefono celular:</Text>
            <Text fontSize="lg">{organization.cellphone}</Text>
          </Flex>
        </Center>
      </Grid>
    </Box>
  );
}

export default OrganizationData;
