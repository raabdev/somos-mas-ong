import React, { Fragment, useEffect } from 'react';
import Testimonio from './testimonio';
import styled from '@emotion/styled';
import {  Box, Table, Thead, Tbody, Tr, Th, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { obtenerTestimoniosApi } from '../../../reducers/testimonialsReducer';
import { useDispatch, useSelector } from 'react-redux';
import '../../../../src/pages/backoffice/news/index.css'
import SectionTitleBack from '../SectionTitleBack';

const Contenedor = styled.div`
    max-width: 1300px;
    width:95%;
    margin:auto;
    padding:1rem;
    object-fit: cover;
`;

const Testimonios = () => {

    const dispatch = useDispatch()

    const { testimonios, loading } = useSelector( state => state.testimonios );


    useEffect(() => {

        dispatch(obtenerTestimoniosApi());

    }, [dispatch])

    if(loading){
        return <p>cargando...</p>
    }
    return (
        <Fragment>
            <Contenedor>
                <Box display="flex" flexDirection={{base: "column", sm:"column", md:"row", lg:"row", xl:"row"}} justifyContent="space-between" alignItems="center">
                    <Box pb={{base: "0", sm:"0", md:"6rem", lg:"6rem", xl:"6rem"}} mt="2rem">
                        <SectionTitleBack title={"Testimonios"} color={"#6898C8"} />                        
                    </Box>
                     
                <Link to={"/backoffice/testimonials/create"}>
                    <Button
                        color="#DB5752"
                        backgroundColor="transparent"
                        fontWeight="700"
                        fontSize="1.3rem"
                        mt={{base: ".5rem", sm:".5rem", md:"5rem", lg:"5rem", xl:"5rem"}}                        
                        mb={{base: ".5rem", sm:".5rem", md:"0", lg:"0", xl:"0"}}                        
                        alignItems="center"
                        _hover={{ bg: "#DB5752", color:"#FFF" }}
                    >Agregar </Button>
                </Link>
                </Box>
                <Box boxShadow={{base:"none", sm:"none", md:"lg", lg:"lg", xl:"lg"}}>
                <Table
                    size="sm"
                    m="0 auto 1rem auto"
                >
                    <Thead>
                        <Tr >
                        <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Imagen</Th>
                        <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Nombre</Th>
                        <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Opciones</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { testimonios.length === 0 ? 'No existen testimonios que mostrar' : (
                                testimonios.map((testimonio, index) => (
                                    <Testimonio
                                        key={testimonio.id}
                                        testimonio={testimonio}
                                        index={index}
                                    />
                                ))
                            )}
                    </Tbody>
                </Table>
                </Box>
            </Contenedor>
        </Fragment>
     );
}

export default Testimonios;