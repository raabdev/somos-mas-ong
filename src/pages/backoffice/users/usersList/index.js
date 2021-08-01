import React from "react";
import { Box, Center } from "@chakra-ui/react";
import styled from '@emotion/styled';
import { showConfirm } from "services/Alert/alerts";

import UsersTable from "../components/UsersTable";
import LinkToCreateUser from "../components/LinkToCreateUser";
import Loading from "components/Loading";

import { useUserAdmin, useGetUsers, useDeleteUser } from "../hooks";
import SectionTitleBack from "components/backoffice/SectionTitleBack";

const Contenedor = styled.div`
    max-width: 1300px;
    width:95%;
    margin:auto;
    padding:1rem;
`;

const sweetAlertOptions = {
  title: "¿Eliminar usuario?",
  text: "¿Confirma que desea borrar este usuario? Recuerde que el borrado es irreversible",
  confirmText: "Si, Borrar",
};

export default function UsersListPage() {
  /* Obtener el usuario logueado*/
  const userLogged = { role: "admin" };

  /* Pasar estos usuarios al componente UsersTable 
  cuando se tenga la conexion con la API real */
  const { users, setUsers, isLoading } = useGetUsers();

  /* El hook recibe el usuario logueado y 
    permite ver la lista de usuarios si su 
    role es admin, si no lo es, redirecciona /backoffice */
  useUserAdmin({ user: userLogged });

  const { deleteUser, isSubmiting } = useDeleteUser();

  const handleClickDelete = user_id => {
    showConfirm(sweetAlertOptions).then(result => {
      if (result.isConfirmed) {
        deleteUser({ user_id });
        setUsers(users.filter(user => user.id !== user_id));
      }
    });
  };

  return (
    <>
      
      <Contenedor>
      <Box display="flex" flexDirection={{base: "column", sm:"column", md:"row", lg:"row", xl:"row"}} justifyContent="space-between" alignItems="center">
                    <Box pb={{base: "0", sm:"0", md:"6rem", lg:"6rem", xl:"6rem"}} mt="2rem">
                      <SectionTitleBack title={"Usuarios"} color={"#6898C8"} />                        
                    </Box>
          <LinkToCreateUser />
        </Box>
        
        <Box w="100%" color="black" mt={"2rem"}>
          {isLoading ? (
            <Center my={"10rem"}>
              <Loading />
            </Center>
          ) : (
            <UsersTable
              users={users}
              handleClickDelete={handleClickDelete}
              isSubmiting={isSubmiting}
            />
          )}
        </Box>
        </Contenedor>
    </>
  );
}
