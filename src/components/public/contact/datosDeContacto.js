import React from 'react';
import { Icon } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Container, Text, Box, Image, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizationApiData } from '../../../../reducers/organizationReducer';

  

const DatosDeContacto = () => {

const dispatch = useDispatch();
    
  //Ver que trae la ruta para reemplazar las redes sociales y el logo donde corresponda
  //const dataFromReducer = useSelector(state => state.organization.organizationData);
  //console.log(dataFromReducer)
  
  //Almacena los datos que vienen de organizationReducer
  //const [ data, setData ] = useState('')
  
  useEffect(() => {
  
      dispatch(getOrganizationApiData())
  
      //setData(dataFromReducer)
  
  }, [dispatch])
    
    //Lineas de abajo son ilustrativas, se cambian por lo que venga del estado de organiationReducer
    const name ="Somos Más";
    const image = "https://picsum.photos/400";

    return ( 
        <Container maxW="container.xl" mt="1rem" >
            
            <Box display="flex" justifyContent="space-around">
                <Box>
                    <Text
                        fontSize="6xl"
                        fontWeight="extrabold"
                        textAlign="center"
                        fontFamily="Roboto"
                        lineHeight="10"
                        pb="2rem"
                        >
                        {name}
                    </Text>
                    <Box>
                       <a href="https://www.facebook.com/">
                        <Icon as={FaFacebook} fontSize="2rem" color="#3b5998"/>
                    </a> 
                    </Box>
                    <Box mt="1rem">
                        <a href="https://www.linkedin.com/">
                        <Icon as={FaLinkedin} fontSize="2rem" color="#0e76a8"/>
                    </a>
                    </Box>     
                </Box>
                <Box>
                    <Image src={image} />
                </Box>    
            </Box>
        </Container>
     );
}
 
export default DatosDeContacto;