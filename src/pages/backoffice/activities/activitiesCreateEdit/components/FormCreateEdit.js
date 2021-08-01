import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiUpdateActivity, apiAddActivity } from '../../../../../reducers/activitiesReducer';
import { FormControl, FormLabel, Input, Container, Image, Box, Button } from "@chakra-ui/react"
import CKEditor from 'ckeditor4-react';
import {useHistory} from 'react-router-dom';

const FormCreateEdit = (props) => {

    const { mode, activitiesData} = props;

    const dispatch = useDispatch();

    const history = useHistory()

    const [activities, setActivities] = useState({
        id: '',
        name: '',
        description: '',
        image: ''
    })
    
    const [selectetdFile, setSelectedFile] = useState([]);
    const [imagenes, setImage] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {

        if(activitiesData) {

            setActivities({
                id: activitiesData.idActivities,
                name: activitiesData.nameActivities,
                description: activitiesData.descriptionActivities
            })
        }

        encodeFileBase64(selectetdFile[0])

        if (imagenes) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setPreview(reader.result);
            };
            reader.readAsDataURL(imagenes);
          } else if(activitiesData){
            setPreview(activitiesData.imgActivities);
          } else {
              setPreview("/images/profileFace.svg")
          }
         // eslint-disable-next-line 
}, [selectetdFile, imagenes]) 

    const onFileChange = (e) => {
       
        setSelectedFile(e.target.files);
        setImage(e.target.files[0]);
        
      };
    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.onload = () => {
            var Base64 = reader.result;
            
            setActivities({
                ...activities,
                image: Base64});                          
          };
          reader.onerror = (error) => {
            console.log("error: ", error);
          };
        }
      };

    const handleName = (e) => {
        const newName = e.target.value;
        setActivities({...activities, name : newName})
    }

    const handleDescription = (e) => {
        const newDescription = e.editor.getData();
        setActivities({...activities, description : newDescription});
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(history.location.state === undefined) {
            dispatch(apiAddActivity(activities));
        } else {
            dispatch(apiUpdateActivity(activities));
        }
        history.push('/backoffice/activities');
    }

    const methodForm = () => {
        if(!mode) {
            return 'GET';

        } else {
            if( activities.idActivities === '' || activities.nameActivities === '' || activities.descriptionActivities === '' || activities.imgActivities === ''){
                return 'POST';
            } else {
                return 'PATCH';
            }
        }
    }
    
    const actionForm = () => {
        if(!mode) {
            return '';
        } else {
            if(activities.idActivities === '' || activities.nameActivities === '' || activities.descriptionActivities === '' || activities.imgActivities === ''){
                return '/activities/create';
            } else {
                return `/activities/${activities.idActivities}`;
            }
        }
    }

    return (
            <Container maxW="container.sm" mt="3rem" border="1px" borderRadius="2xl" p="1rem" borderColor="#e2e8f0" width="95%">
            <form method={methodForm()} action={actionForm()} onSubmit={handleSubmit}> 
            
                <FormControl id="nombre">
                    <FormLabel>Nombre</FormLabel>
                        <Input type="text" value={activities.name} onChange={handleName} />
                </FormControl>

                <FormControl id="descripcion">
                    <FormLabel>Descripción</FormLabel>
                        <CKEditor 
                            data={activities.descriptionActivities}
                            onChange={handleDescription} />
                </FormControl>

                <Box display="flex" justifyContent="space-between" padding="1rem">
                    <Box>
                        <FormControl id="imagen">
                            <FormLabel>Imagen</FormLabel>
                                <input type="file" 
                                onChange={onFileChange} />
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
                > Submit
                </Button>
            </form>
        </Container>
    );
};

export default FormCreateEdit;