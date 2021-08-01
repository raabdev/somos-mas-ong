import React from 'react'
import { Heading, Box } from "@chakra-ui/react"
import styled from '@emotion/styled';

const SectionTitleBack = ({title, color}) => {

    const Styledhr = styled.hr`
    width: 4%;
    color: rgba(0, 0, 0, 0.8);
    height: 1px;
    display: inline-block;
    background: ${color};
    @media(max-width: 650px){
        width:35%
    }  
    `  

    return (
        <Box display="flex" alignItems="center" mt="2%" w={{base:'300px', sm:'300px', md:'300px', lg:'800px'}} >
            <Styledhr />
            <Heading fontSize="48px" fontWeight="400" color={color}>{title}</Heading>
        </Box>
    )
}

export default SectionTitleBack;