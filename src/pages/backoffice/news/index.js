import React, { useEffect } from 'react'
import Loading from '../../../components/Loading'
import NewsList from './components/NewsList'
import { Button, Box } from "@chakra-ui/react"
import './index.css';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerNoticiasApi } from 'reducers/newsReducer';
import styled from '@emotion/styled';
import SectionTitleBack from 'components/backoffice/SectionTitleBack';

const Contenedor = styled.div`
    max-width: 1300px;
    width:95%;
    margin:auto;
    padding:1rem;
`;

const News = () => {

    const { news, loading } = useSelector( state => state.newsReducer );

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(obtenerNoticiasApi())
    }, [dispatch])
    
    return (
        <Contenedor>
                <Box display="flex" flexDirection={{base: "column", sm:"column", md:"row", lg:"row", xl:"row"}} justifyContent="space-between" alignItems="center">
                    <Box pb={{base: "0", sm:"0", md:"6rem", lg:"6rem", xl:"6rem"}} mt="2rem">
                        <SectionTitleBack title={"Novedades"} color={"#6898C8"} />                        
                    </Box>
                    
                    
                <Link to={"/backoffice/news/create"}>
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
            {loading? <Loading /> : <NewsList news={news} /> }
        </Contenedor>
    )
}

export default News
