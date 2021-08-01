import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetActivities } from '../../../reducers/activitiesReducer';
import ActivitiesList from './components/ActivitiesList'
import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Box, Button } from "@chakra-ui/react"
import styled from '@emotion/styled';
import SectionTitleBack from 'components/backoffice/SectionTitleBack';

const Contenedor = styled.div`
    max-width: 1300px;
    width:95%;
    margin:auto;
    padding:1rem;
    object-fit: cover;
`;

const Activities = () => {

    const dispatch = useDispatch()

    const { activities } = useSelector( state => state.activities );
    
    useEffect(() => {

        dispatch(apiGetActivities());
        
    }, [dispatch])

    return (
         
        <Contenedor>
        <Box  display="flex" flexDirection={{base: "column", sm:"column", md:"row", lg:"row", xl:"row"}} justifyContent="space-between" alignItems="center">
                    <Box pb={{base: "0", sm:"0", md:"6rem", lg:"6rem", xl:"6rem"}} mt="2rem">
                        <SectionTitleBack title={"Actividades"} color={"#6898C8"} />                           
                    </Box>
                <Link to="/backoffice/activities/create">
                    <Button 
                        color="#DB5752"
                        backgroundColor="transparent"
                        fontWeight="700"
                        fontSize="1.3rem"
                        mt={{base: ".5rem", sm:".5rem", md:"5rem", lg:"5rem", xl:"5rem"}}                        
                        mb={{base: ".5rem", sm:".5rem", md:"0", lg:"0", xl:"0"}}                        
                        alignItems="center"
                        _hover={{ bg: "#DB5752", color:"#FFF" }}
                    >Agregar</Button>
                </Link>
                </Box>
                <Box boxShadow={{base:"none", sm:"none", md:"lg", lg:"lg", xl:"lg"}}>
                <Table 
                    size="sm" 
                    m="0 auto 1rem auto" 
                >
                    <Thead>
                        <Tr>
                            <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem" >Imagen</Th>
                            <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem" >Nombre</Th>
                            <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem" >Creado el</Th>
                            <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Editar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {activities.map((user, index) => <ActivitiesList index={index} key={user.id} id={user.id} name={user.name} description={user.description} img={user.image} creado={user.created_at} />)}
                    </Tbody>
                </Table>
        </Box>
        </Contenedor>
        
    )
}

export default Activities