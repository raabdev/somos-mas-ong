import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";

export function Slides({slides, handleEdit, handleDelete}) {
 
   const slidesTable = slides.map((item, i) => {
    return (
        <Tr key={i}>
          <Td textAlign="center">{item.title}</Td>
          <Td>
            <Flex justify="center">
              <Image
                src={item.image}
                alt="placeholder"
                boxSize="75px"
                objectFit="contain"
              />
            </Flex>
          </Td>
          <Td textAlign="center">{item.order}</Td>
          <Td textAlign="center" onClick={()=>handleEdit(item)}>
            <EditIcon w={6} h={6} />
          </Td>
          <Td textAlign="center" onClick={()=>handleDelete(item.id)}>
            <DeleteIcon w={6} h={6} />
          </Td>
        </Tr>
    );
  });

  return (
    <>
      <Heading as="h1">Slides</Heading>
      <Link to={"/backoffice/slides/create"}>
        <Heading color="blue" as="h2" size="md">
          Crear Slides
        </Heading>
      </Link>
      <Table variant="striped" colorScheme="teal" overflowX="auto">
        <TableCaption>Slides de la ONG</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">Título</Th>
            <Th textAlign="center">Imagen</Th>
            <Th textAlign="center">Orden</Th>
            <Th textAlign="center">Editar</Th>
            <Th textAlign="center">Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>{slidesTable}</Tbody>
      </Table>
    </>
  );
}

export default Slides;
