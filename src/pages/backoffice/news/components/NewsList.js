import React from 'react'
import NewsListItem from './NewsListItem'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Box
  } from "@chakra-ui/react"

const NewsList = ({ news }) => {
    return (
        <Box boxShadow={{base:"none", sm:"none", md:"lg", lg:"lg", xl:"lg"}}>
            <Table 
                size="sm" 
                m="0 auto 1rem auto" 
            >
            <Thead>
                <Tr>
                    <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Imagen</Th>
                    <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Nombre</Th>
                    <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Creado el</Th>
                    <Th textAlign="center" pt="1rem" pb="1rem" fontSize=".9rem">Opciones</Th>
                </Tr>
            </Thead>
            <Tbody>
                {news?.map((item, index) => <NewsListItem index={index} key={index} item={item} />)}
            </Tbody>
        </Table>
        </Box>  
        
    )
}

export default NewsList
