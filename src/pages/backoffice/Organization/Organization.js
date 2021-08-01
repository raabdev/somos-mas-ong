import { Box, Button } from "@chakra-ui/react"
import styled from '@emotion/styled'
import SectionTitleBack from "components/backoffice/SectionTitleBack"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOrganizationApiData } from '../../../reducers/organizationReducer'
import OrganizationData from './components/OrganizationData'

const Contenedor = styled.div`
    max-width: 1300px;
    width:95%;
    margin:auto;
    padding:1rem;
`;

const Organization = () => {
  const dispatch = useDispatch();
  const organizationData = useSelector( state => state.organization.organizationData );
  console.log(organizationData)

  useEffect(() => {
      dispatch(getOrganizationApiData())
  }, [dispatch])

  return (
    <Contenedor
      fontSize={["md", "lg", "xl"]}
    >
      <Box display="flex" flexDirection={{base: "column", sm:"column", md:"row", lg:"row", xl:"row"}} justifyContent="space-between" alignItems="center">
        <Box pb={{base: "0", sm:"0", md:"6rem", lg:"6rem", xl:"6rem"}} mt="2rem">
          <SectionTitleBack title={"Organización"} color={"#6898C8"} />              
        </Box>
        <Link to={"/backoffice/organization/edit"}>
            <Button 
                color="#DB5752"
                backgroundColor="transparent"
                fontWeight="700"
                fontSize="1.3rem"
                mt={{base: ".5rem", sm:".5rem", md:"5rem", lg:"5rem", xl:"5rem"}}                        
                mb={{base: ".5rem", sm:".5rem", md:"0", lg:"0", xl:"0"}}                        
                alignItems="center"
                _hover={{ bg: "#DB5752", color:"#FFF" }}
            >Editar</Button>
        </Link>
      </Box>
      <OrganizationData organization={organizationData}/>
    </Contenedor>
  );
}

export default Organization;