import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Tr, Td } from "@chakra-ui/react"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { eliminarNoticiaApi, obtenerNoticiaActual } from 'reducers/newsReducer';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled';

const Imagen = styled.img`
    width: 70px;
    height: 70px;
    border-radius:50%;
    margin:auto;
    object-fit: cover;
  `;

const NewsListItem = ({item, index}) => {

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        console.log(id)
        dispatch(eliminarNoticiaApi(id))
    }

    return (
        <Tr bg={{base:"transparent", md: index %2 === 0 ? "#9ac9fb2b" : "transparent", lg:index %2 === 0 ? "#9ac9fb2b" : "transparent"}}>
            <Td textAlign="center" ><Imagen src={item.image} /></Td>
            <Td textAlign="center" >{item.name}</Td>
            <Td textAlign="center" >{item.created_at}</Td>
            <Td textAlign="center" >
                <Link to={`/backoffice/news/edit/${item.id}`}>
                <Button                        
                    type="button"
                    backgroundColor="transparent"
                    onClick={() => {dispatch(obtenerNoticiaActual(item))}} >
                        <EditIcon/>
                </Button>
                </Link>
                <Button
                    type= "button"
                    backgroundColor="transparent"
                    onClick={() => {handleDelete(item.id)}} >
                    <DeleteIcon/> 
                </Button>
            </Td>
        </Tr>
    )
}

export default NewsListItem
