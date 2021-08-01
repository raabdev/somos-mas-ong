import React from "react";
import { useHistory } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {useSelector, useDispatch} from 'react-redux'
import { logout } from 'reducers/authReducer';



export function DropDown() {
  const { push } = useHistory();
  const dispatch= useDispatch()
  const {isLoggedIn, name} = useSelector(state=> state.auth)
  const redirectTo = btn => {
    if (btn === "logout") console.log("signout");
    if (btn === "login") push("/login");
    if (btn === "register") push("/register");
  };

  return (
    <Menu>
      <MenuButton py={[4, 4, 0, 0, 0]}>
        <Text  color='black' fontSize='15px'>
          {isLoggedIn ? name : "Acceder"} <ChevronDownIcon />
        </Text>
      </MenuButton>
      <MenuList color="black">
        {isLoggedIn ? (
          <MenuItem onClick={() => dispatch(logout())}>
            Cerrar sesión
          </MenuItem>
        ) : (
          <>
            <MenuItem onClick={() => redirectTo("login")}>Log in</MenuItem>
            <MenuItem onClick={() => redirectTo("register")}>Registrate</MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
}
