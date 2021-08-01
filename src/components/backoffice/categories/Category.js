import React from 'react'
import { deleteCategoryApi, getCategory } from '../../../reducers/categoriesReducer'
import { useDispatch } from 'react-redux' 
import { Link } from 'react-router-dom'
import {
    Tr,
    Td,
    Button
} from "@chakra-ui/react"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';


export default function Category({item, index}) {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCategoryApi(item.id))

    }

    return (
        <Tr bg={{base:"transparent", md: index %2 === 0 ? "#9ac9fb2b" : "transparent", lg:index %2 === 0 ? "#9ac9fb2b" : "transparent"}}>
        <Td textAlign="left">{item.name}</Td>
        <Td textAlign="center">{item.created_at}</Td> 
        <Td textAlign="center">
            <Button                        
                type="button"
                backgroundColor="transparent"
                onClick={() => {dispatch(getCategory(item))}}>
                <Link to={`/backoffice/categories/edit/${item.id}`}>
                <EditIcon/>
                </Link>
            </Button>        
        
            <Button                        
                type="button"
                backgroundColor="transparent" 
                onClick={handleDelete}
            >
                <DeleteIcon/>
            </Button>        
        </Td>
        </Tr>
    )
}
