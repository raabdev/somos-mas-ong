import React from "react";
import { useDispatch } from "react-redux";
import { eliminarMemberApi } from "reducers/membersReducer";
import { Button, Tr, Td } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { showSuccess } from "services/Alert/alerts";

const Imagen = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;
  object-fit: cover;
`;

const MembersList = ({ id, name, img, description, index }) => {
  const dispatch = useDispatch();

  let history = useHistory();
  const handleRedirect = (id, name, img, description) => {
    history.push({
      pathname: `/backoffice/members/${id}`,
      state: {
        idMember: id,
        nameMember: name,
        imageMember: img,
        descriptionMember: description
      },
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¿Estas a punto de eliminar este miembro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9AC9FB",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(eliminarMemberApi(id));
        showSuccess("Miembro eliminado", "");
      }
    });
  };

  return (
    <Tr bg={{base:"transparent", md: index %2 === 0 ? "#9ac9fb2b" : "transparent", lg:index %2 === 0 ? "#9ac9fb2b" : "transparent"}}>
      <Td><Imagen src= {img} alt="userImage"/></Td>
      <Td textAlign="center">{name}</Td>
      <Td textAlign="center">
      <Button                        
          type="button"
          backgroundColor="transparent"
          onClick={() => handleRedirect(id, name, img, description)}
        >
          <EditIcon/>
      </Button>
      <Button
          type= "button"
          backgroundColor="transparent"
          onClick={() => handleDelete()}
        >
          <DeleteIcon/> 
      </Button>
      </Td>
    </Tr>
  );
};

export default MembersList;
