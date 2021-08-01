import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import { HamburgerIcon } from '@chakra-ui/icons'
import {Box, Flex, Text, Button} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizationApiData } from '../../../../reducers/organizationReducer';
import { logout } from 'reducers/authReducer';
import BtnsNav from './BtnsComponents';


const ContenedorHeader = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100%;
    background-color:#FFF;
    border-bottom: 5px solid;
  border-image: linear-gradient(to right, rgba(0,0,0,0), #f4f4f4) 1;
    @media (max-width:768px) {
    padding:15px 0 15px 0;
       
    }
`;

const Contenedor = styled.div`
    margin-left:20px;
    @media (max-width:768px){
       
    }
    
`;

const ContenedorBotones = styled.div`
    margin-left:1rem;
    
    @media (max-width:768px){
        ${'' /* width:100%;
        text-align:center;
        margin:0; */}
        display:none
    }
`;

const HambIconBoton = styled.button`
    margin-right:1rem;
    cursor:pointer;
`;  
 
const ImagenLogo = styled.img`   
   width:170px;
   margin-left: 15rem;
    :hover{
        cursor:pointer;
    }
    @media (max-width: 1000px){
        margin-left: 5rem; 
    }
`;


const Header = ({handleHambIcon}) => {
    
    const {isLoggedIn, name} =useSelector(state=> state.auth)
    const dispatch = useDispatch();    

    const logo = "/images/assets/logo.png";  

    useEffect(() => {

        dispatch(getOrganizationApiData())

        //setLogo(logoFromData)

    }, [dispatch])

    return (
        <header >
            <ContenedorHeader>
                <Contenedor>
                    <HambIconBoton
                        onClick={handleHambIcon}
                    >
                        <HamburgerIcon w={10} h={10} color="black" />
                    </HambIconBoton>                 
                </Contenedor>
                <Box mr={{base:'auto', sm:'auto', md:'0', lg:'0'}} ml='30px'>
                <Link to='/'>
                    <ImagenLogo src={logo}/>                    
                </Link>                    
                </Box>

                <Box display={{base:'none', sm:'none', md:'block', lg:'block'}}  clipPath='polygon(15% 0%, 100% 0, 100% 100%, 0 100%)' bg='#F4F4F4'  m={0} h='75px' w='30%'>
                <ContenedorBotones>
               
                    { isLoggedIn ? (
                            <Flex alignItems='center' justifyContent="flex-end" mr='20px' mt='20px' color='#FFF'>
                                <Text fontWeight='400' fontSize='20px' mr='20px' color='black' >{name}</Text>                                   
                                <Button bg='#db5759' onClick={()=> dispatch(logout()) }>Cerrar Sesión</Button>                                        

                            </Flex>
                    ) : (
                        <Flex alignItems='center' justifyContent="flex-end" mr='20px' mt='20px'>  
                            <Link to='/login'>
                                <BtnsNav>
                                    Login
                                </BtnsNav>
                            </Link>                  
                            <Link to='/register'>
                                <BtnsNav>
                                    Registrarse
                                </BtnsNav>
                            </Link>
                        </Flex>
                    )}
                </ContenedorBotones>
                </Box>
            </ContenedorHeader>
            
        </header>
      );
}
 
export default Header;