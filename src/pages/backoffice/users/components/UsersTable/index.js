import React, { Fragment } from "react";
import { Table, Thead, Tbody, Tr, Th, Box } from "@chakra-ui/react";
import UsersTableRow from "../UsersTableRow";



export default function UsersTable({ users, handleClickDelete, isSubmiting }) {
  return (
    <Fragment>  
      <Box boxShadow={{base:"none", sm:"none", md:"lg", lg:"lg", xl:"lg"}}>
        <Table  
          size="sm" 
          m="1rem auto 1rem auto">
          <Thead>
            <Tr>
              <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Nombre</Th>
              <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Email</Th>
              <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Opciones</Th>
            </Tr>
          </Thead>
          <Tbody> 
            {users.map((user, index) => {
              return (
                <UsersTableRow
                  user={user}
                  key={user.id}
                  handleClickDelete={handleClickDelete}
                  isSubmiting={isSubmiting}
                  index={index}
                />
              );
            })}
          </Tbody>
        </Table>
        </Box>
    </Fragment>
  );
}
