import React from 'react';
import styled from '@emotion/styled';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Tr, Td, Button } from "@chakra-ui/react";
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { obtenerTestimonioActual, eliminarTestimonioApi  } from '../../../reducers/testimonialsReducer';
import { useDispatch } from 'react-redux';
  
  
const Imagen = styled.img`
    width: 50px;
    border-radius:50%;
    margin:auto;
    object-fit: cover;
`;


const Testimonio = ({testimonio, index}) => {

    const dispatch = useDispatch()
  
    const { image, name, id } = testimonio  
   
    const history = useHistory();
  
        const confirmarEliminarTestimonio = id =>{
  
             Swal.fire({
                 title: 'Estas seguro?',
                 text: "Un testimonio que se elimina no se puede volver a recuperar",
                 icon: 'warning',
                 showCancelButton: true,
                 confirmButtonColor: '#9AC9FB',
                 cancelButtonColor: '#d33',
                 confirmButtonText: 'Sí, eliminar!',
                 cancelButtonText: 'Cancelar'
                 }).then((result) => {
                 if (result.isConfirmed) {
                     fetch('API', {
                     method: 'DELETE',
                     });
                     dispatch(eliminarTestimonioApi(id));
                 }
                 })
         }
  
          const redireccionarEdicion = testimonio => {
          dispatch(obtenerTestimonioActual(testimonio))
          history.push(`/backoffice/testimonials/edit/${id}`);
        }
    return ( 
        <Tr bg={{base:"transparent", md: index %2 === 0 ? "#9ac9fb2b" : "transparent", lg:index %2 === 0 ? "#9ac9fb2b" : "transparent"}}>
            <Td><Imagen src= {image} /></Td>
            <Td textAlign="center">{name}</Td>
            <Td textAlign="center">
                <Button                        
                    type="button"
                    backgroundColor="transparent"
                    onClick={()=>redireccionarEdicion(testimonio)}
                    >
                    <EditIcon/>
                </Button>
                <Button
                    type= "button"
                    backgroundColor="transparent"
                    onClick={() => confirmarEliminarTestimonio(id)}
                > <DeleteIcon/> 
                </Button>
            </Td>
        </Tr>
    );
  }
   
  export default Testimonio;