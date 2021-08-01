import React, { useState, useEffect } from 'react';
import CKEditor from 'ckeditor4-react';
import {
    Select,
    FormControl,
    FormLabel,
    Input,
    Container,
    Button, 
    Box, 
    Image
} from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import { actualizarNoticiaApi } from '../../../reducers/newsReducer';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesApi } from 'reducers/categoriesReducer';


const FormEdit = () => {
    
    const dispatch = useDispatch();        

    const history = useHistory();

    const { categories } = useSelector( state => state.categories );
    const { newDetails } = useSelector( state => state.newsReducer );
console.log(newDetails)
    const [newNovedad, setNewNovedad] = useState({
        id: '',
        name: '',
        image:'',
        category_id:'',
        content: ''
    });  
  
    const { image } = newNovedad;

    const [selectetdFile, setSelectedFile] = useState([]);
    const [imagenes, setImage] = useState();
    const [preview, setPreview] = useState();
       
  useEffect(() => {
      dispatch(getCategoriesApi())
    
      if(newDetails){
        setNewNovedad({
            id: newDetails.id,
            name: newDetails.name,
            category_id: newDetails.category_id,
            content: newDetails.content
        })
    }
            
    encodeFileBase64(selectetdFile[0])

    if (imagenes) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(imagenes);
      } else if(newDetails){
        setPreview(newDetails.image);
      } else {
          setPreview("/images/profileFace.svg")
      }
// eslint-disable-next-line
  }, [selectetdFile, imagenes])  

    const handleChangeName = e => {
       
        setNewNovedad({
            ...newNovedad,
            name : e.target.value
        })
    }

    const handleChangeCategory = (event) => {
        setNewNovedad({
            ...newNovedad,
            category_id : event.target.value
        })
    }

    const handleChangeContent = e=> {
        const deGetdata = e.editor.getData();
        setNewNovedad({
            ...newNovedad,
            content : deGetdata
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
            
            setNewNovedad({
                ...newNovedad,
                image: Base64});                          
          };
          reader.onerror = (error) => {
            console.log("error: ", error);
          };
        }
      };

    const handleEdit = e => {
        e.preventDefault()
        
        dispatch(actualizarNoticiaApi(newNovedad));
        console.log(newNovedad)
        history.push('/backoffice/news');
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
                        value={newNovedad.name}
                    />
               
            </FormControl>
            <FormControl>
                <FormLabel>Categoria</FormLabel>
                <Select onChange={handleChangeCategory} value={newNovedad.category_id} placeholder="Select option">
                    {categories?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </Select>
            </FormControl>
                
                <FormLabel>Contenido</FormLabel>
                    <CKEditor
                        data={newNovedad.content}
                        onChange={handleChangeContent}
                />         
            <Box display="flex" justifyContent="space-between" padding="1rem">
                <Box>
                    <FormControl id="image">
                        <FormLabel>Imagen</FormLabel>                    
                            <input 
                            type="file"
                            name={image}
                            onChange={onFileChange}
                            />      
                    </FormControl>
                </Box>

                <Box>
                    <Image src={preview} alt="imagen" width="100px" borderRadius="10%" m="auto"/>
                </Box>
            </Box>
                     
            <Button
                    mt={4}
                    backgroundColor="#9AC9FB" 
                    color="#FFF"               
                    type="submit"
                    w="100%"
                    onClick={handleEdit}
                >Editar
                </Button>
        </Container>
        </>
        
     );
}
 
export default FormEdit;