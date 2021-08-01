import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import CKEditor from 'ckeditor4-react';
import { useSelector, useDispatch } from 'react-redux'
import { updateCategoryApi, addCategoryApi } from '../../../../reducers/categoriesReducer'
import {
    Container,
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react'

const UseForm = () => {

    const history = useHistory();

    const { category } = useSelector(state => state.categories) 
    const dispatch = useDispatch()

    const [ state, updateState ] = useState({
        name: '',
        description: '',
    })

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            if (category) {
                updateState({...state, 
                    name: category.name, 
                    description: category.description,
                    id: category.id
                })
            } else {
                updateState({name:"Category name", description:"description of category"})
            }
        } 
        // eslint-disable-next-line
    }, [dispatch])
    
    const handleChangeName = (event) => {
        updateState({...state, 
            name: event.target.value})
    }

    const onEditorChange = (event) => {
        updateState({...state, 
            description: event.editor.getData()})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (id) {
            dispatch(updateCategoryApi(state))
            history.push('/backoffice/categories');
        } else {
            console.log(state);
            dispatch(addCategoryApi(state))
            history.push('/backoffice/categories');
        }
    }
    
    return (
        <Container maxW="container.sm" mt="3rem" border="1px" borderRadius="2xl" p="1rem" borderColor="#e2e8f0" width="95%">
            <Flex width="full" align="center" justifyContent="center">
                <Box p={2}>
                    <Box textAlign="center">
                    <Heading>{id ? 'Editar categoría' : 'Crear categoría'}</Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired>
                                <FormLabel>Nombre</FormLabel>
                                <Input onChange={handleChangeName} value={state.name} type="text" placeholder="Ingrese el nombre" />
                            </FormControl>
                            <FormControl mt={6} isRequired>
                                <FormLabel>Contenido</FormLabel>
                                <CKEditor
                                    data={state.description}
                                    onChange={onEditorChange}
                                />
                            </FormControl>
                            <Button width="full" backgroundColor="#9AC9FB" mt={4} type="submit" color="#FFF">
                                Enviar
                            </Button>
                            <Link to={"/backoffice/categories"}>
                                <Button backgroundColor="#9AC9FB" width="full" mt={4} color="#FFF">
                                    Cancelar
                                </Button>
                            </Link>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}

export default UseForm