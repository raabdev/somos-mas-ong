import React, { useState, useEffect } from 'react';
import CKEditor from 'ckeditor4-react';
import {
    FormControl, FormLabel, Input, Container, Button, Image, Box
} from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import { actualizarTestimonioApi, agregarTestimonioApi } from '../../../reducers/testimonialsReducer';
import { useDispatch } from 'react-redux';


const Formulario = ({testimonio}) => {
    
    const dispatch = useDispatch();        

    const history = useHistory();

    const [newTestimonio, setNewTestimonio] = useState({
        id:'',
        name:'',
        image:'',
        description:''
        });  
            
    const { name, image, description } = newTestimonio;
  
    const [selectetdFile, setSelectedFile] = useState([]);
    const [imagenes, setImage] = useState();
    const [preview, setPreview] = useState();
      
  useEffect(() => {
        
    if(testimonio){
        
        setNewTestimonio({
            id:testimonio.id,
            name: testimonio.name,
            description: testimonio.description
        })        
    }
         encodeFileBase64(selectetdFile[0])
        
            if (imagenes) {
               const reader = new FileReader();
               reader.onloadend = () => {
                 setPreview(reader.result);
               };
               reader.readAsDataURL(imagenes);
             } else if(testimonio){
               setPreview(testimonio.image);
             } else {
                 setPreview("/images/profileFace.svg")
             }
        // eslint-disable-next-line
  }, [selectetdFile, imagenes])  

    const handleChangeName = e => {
       
        setNewTestimonio({
            ...newTestimonio,
            [e.target.name] : e.target.value
            
        })
    }

    const handleChangeSdk = e=> {
        const deGetdata = e.editor.getData();
        setNewTestimonio({
            ...newTestimonio,
            description : deGetdata
        })
    }    
    const onFileChange = (e) => {
        console.log(e)
        setSelectedFile(e.target.files);
        setImage(e.target.files[0]);
        
      };
    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.onload = () => {
            var Base64 = reader.result;
            console.log(Base64);
            
            setNewTestimonio({
                ...newTestimonio,
                image: Base64});                          
          };
          reader.onerror = (error) => {
            console.log("error: ", error);
          };
        }
      };
    
    const handleCreate = e => {
        e.preventDefault()

        dispatch(agregarTestimonioApi(newTestimonio));
        history.push('/backoffice/testimonials');
    }

    const handleEdit = e => {
        e.preventDefault()
        
        dispatch(actualizarTestimonioApi(newTestimonio));
        console.log(newTestimonio)
        history.push('/backoffice/testimonials');
    } 
    
    return ( 
        <>
        <Container maxW="container.sm" mt="3rem" border="1px" borderRadius="2xl" p="1rem" borderColor="#e2e8f0" width="95%">
            <FormControl id="name">
                <FormLabel>Nombre</FormLabel>
                    <Input 
                        type="text"
                        name= "name"
                        onChange={handleChangeName}
                        value={name}
                    />
               
            </FormControl>
            
            
                <FormLabel>Descripción</FormLabel>
                    <CKEditor
                        data={description}
                        onChange={handleChangeSdk}
                    />         
            <Box display="flex" justifyContent="space-between" padding="1rem">
                <Box>
                    <FormControl id="image">
                    <FormLabel>Imagen</FormLabel>                    
                        <input type="file"
                        name={image}
                        onChange={onFileChange}
                        />      
                     </FormControl>
                </Box>
                <Box>
                  <Image src={preview} alt="imagen" width="100px" borderRadius="10%" m="auto"/>
                </Box>
            
            </Box>
            { testimonio ? 
                <Button
                    mt={4}
                    backgroundColor="#9AC9FB" 
                    color="#FFF"               
                    type="submit"
                    w="100%"
                    onClick={handleEdit}
                >Editar
                </Button> :
                
                <Button
                    mt={4}
                    backgroundColor="#9AC9FB" 
                    color="#FFF"               
                    type="submit"
                    w="100%"
                    onClick={handleCreate}
                >Crear
                </Button>
                }
        </Container>
        </>
        
     );
}
 
export default Formulario;