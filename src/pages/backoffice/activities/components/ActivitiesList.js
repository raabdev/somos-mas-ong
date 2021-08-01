import React from 'react'
import { useDispatch } from 'react-redux';
import { apiDeleteActivity } from '../../../../reducers/activitiesReducer';
import { Button, Tr, Td } from "@chakra-ui/react"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom';
import styled from '@emotion/styled';

const Imagen = styled.img`
    width: 70px;
    height: 70px;
    border-radius:50%;
    margin:auto;
    object-fit: cover;
  `;

const ActivitiesList = ({ id, name, description, img, creado, index }) => {

    const dispatch = useDispatch()

    let history = useHistory();
    const handleRedirect = (id, name, description, img, creado) => {

        history.push({
            pathname:`/backoffice/activities/${id}`,
            state: { 
                idActivities: id, 
                nameActivities: name,
                descriptionActivities: description,
                imgActivities: img,
                creadoActivities: creado
            }
        });
        // console.log(history);
    }

    const handleDelete = () => {

        Swal.fire({
            title: '¿Estas seguro?',
            text: "Estas a punto de eliminar esta actividad",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9AC9FB',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(apiDeleteActivity(id))
            }
        })
        
    }
 
    return (
        <Tr bg={{base:"transparent", md: index %2 === 0 ? "#9ac9fb2b" : "transparent", lg:index %2 === 0 ? "#9ac9fb2b" : "transparent"}}>
            <Td><Imagen src= {img} alt="imagen" /></Td>
            <Td textAlign="center">{name}</Td>
            <Td textAlign="center">{"2018-09-28T10:55:51.603Z"}</Td>
            <Td textAlign="center">
            <Button
                    type= "button"
                    backgroundColor="transparent"
                    onClick={() => handleRedirect(id, name, description, img, creado)} >
                    <EditIcon/>
                </Button>
                <Button
                    type= "button"
                    backgroundColor="transparent"
                    onClick={() => handleDelete()}>
                    <DeleteIcon/> 
                </Button>
            </Td>
        </Tr>
    )
}

export default ActivitiesList
