import React from 'react';
import Formulario from './formulario';
import { useSelector } from 'react-redux';

const EditarTestimonio = () => {  
    
    const testimonio = useSelector( state => state.testimonios.testimonio ); 
    
    return ( 
        <Formulario
            testimonio = {testimonio}
        />
     );
}
 
export default EditarTestimonio;