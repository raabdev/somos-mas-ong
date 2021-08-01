import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { BUTTONS_TYPES } from "../../const";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';


export default function UsersTableRow({
  user,
  handleClickDelete,
  isSubmiting,
  index
}) {
  const history = useHistory();

  const handleClickEdit = () => {
    history.push(`/backoffice/users/${user.id}`);
  };

  return (
    <Tr bg={{base:"transparent", md: index %2 === 0 ? "#9ac9fb2b" : "transparent", lg:index %2 === 0 ? "#9ac9fb2b" : "transparent"}}>
      <Td textAlign={{base:"center", md:"left", lg:"left"}}>{user.name}</Td>
      <Td textAlign="center">{user.email}</Td>
      <Td textAlign="center">
        <Button
          backgroundColor="transparent"
          type={BUTTONS_TYPES.EDIT}
          onClick={handleClickEdit}
          isSubmiting={isSubmiting}
        > <EditIcon/> </Button>
        <Button
          backgroundColor="transparent"
          type={BUTTONS_TYPES.DELETE}
          onClick={() => handleClickDelete(user.id)}
          isSubmiting={isSubmiting}
        > <DeleteIcon/> </Button>
      </Td>
    </Tr>
  );
}
