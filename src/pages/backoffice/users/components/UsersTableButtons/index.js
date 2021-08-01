import React from "react";
import { Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { BASE_COLORS } from "const/baseColors";
import { BUTTONS_TYPES } from "../../const";

export default function UsersTableButtons({ type, handleClick, isSubmiting }) {
  let bg = type === BUTTONS_TYPES.EDIT ? BASE_COLORS.YELLOW : BASE_COLORS.RED;

  return (
    <Button
      bg={bg}
      size="sm"
      m={".5rem"}
      paddingX={"1.5rem"}
      onClick={handleClick}
      disabled={isSubmiting}
    >
      {type === BUTTONS_TYPES.EDIT ? <EditIcon /> : <DeleteIcon />}
    </Button>
  );
}
