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
import { agregarNoticiaApi } from '../../../reducers/newsReducer';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesApi } from 'reducers/categoriesReducer';


const FormNew = () => {
    
    const dispatch = useDispatch();        

    const history = useHistory();

    const { categories } = useSelector( state => state.categories );

    const [newNovedad, setNewNovedad] = useState({
        name:'',
        category_id:'',
        image:'',
        content:''
        });  
            
    const { name, image, description } = newNovedad;
  
    const [selectetdFile, setSelectedFile] = useState([]);
    const [imagenes, setImage] = useState();
    const [preview, setPreview] = useState();
      
  useEffect(() => {

    dispatch(getCategoriesApi())
        
    encodeFileBase64(selectetdFile[0])

    if (imagenes) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(imagenes);
      } else {
          setPreview("/images/profileFace.svg")
      }
// eslint-disable-next-line
  }, [selectetdFile, imagenes])  

    const handleChangeName = e => {
       
        setNewNovedad({
            ...newNovedad,
            name: e.target.value
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
    
    const handleCreate = e => {
        e.preventDefault()
        console.log(newNovedad);
        dispatch(agregarNoticiaApi(newNovedad));
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
                        value={name}
                    />
               
            </FormControl>
            <FormControl>
                <FormLabel>Categoria</FormLabel>
                <Select onChange={handleChangeCategory} value={newNovedad.category_id} placeholder="Select option">
                    {categories?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </Select>
            </FormControl>
            
            
                <FormLabel>Descripcion</FormLabel>
                    <CKEditor
                        data={description}
                        onChange={handleChangeContent}
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
                
            <Button
                mt={4}
                backgroundColor="#9AC9FB" 
                color="#FFF"               
                type="submit"
                w="100%"
                onClick={handleCreate}
            >Crear
            </Button>
                
        </Container>
        </>
        
     );
}
 
export default FormNew;
