import React, { useState } from "react";
import { NavBarContainer } from "./NavBarContainer";
import {Box} from '@chakra-ui/react'
import { Logo } from "../../Logo";
import { MenuToggle } from "./MenuToggle";
import { MenuLinks } from "./MenuLinks";
import Sidebar from '../Sidebar';
import {publicWebArray} from '../../../routers/PublicWeb/publicWebArray'
import DonarBtn from '../DonarBtn/index,';
import BackofficeBtn from "../BackofficeBtn";


export const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer w='100%' p='0 5% 0 5%' m='auto' {...props}>
      <Logo />
      <MenuLinks isOpen={isOpen} links={publicWebArray} />      
       <Box clipPath='polygon(15% 0%, 100% 0, 100% 100%, 0 100%)' bg='#F4F4F4' position='absolute' right='0' color='black' m='0' h='100%' w='25%'>
          <Box textAlign='center' d='flex' justifyContent='space-around' alignItems='center' p='15px 15% 0 15%'>
            <Box display='flex'>
              <BackofficeBtn/>
              <DonarBtn/>
            </Box>
            
            <MenuToggle toggle={toggle} isOpen={isOpen} />
          </Box>
       </Box>
       <Sidebar isOpen={isOpen} handleOpen={toggle} links={publicWebArray}/>
    </NavBarContainer>
  );
};
