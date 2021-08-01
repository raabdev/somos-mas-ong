import React, { useState, useEffect } from 'react';
import { Formik, Field, Form} from 'formik';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { loginInAction } from 'reducers/authReducer';


// Stored input values
const initialValues = {
  email: '',
  password: '',
}



// Validation functions

function validateEmail(value) {
  let error
  if (!value) {
    error = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email'
  }
  return error
}

function validatePassword(value) {
  let error
  if (!value) {
    error = 'Password is required'
  } else if (value.length < 6) {
    error = 'Invalid password length'
  }
  return error
}

function Login() {
  const {error, success, loading}=useSelector(state => state.auth)
  const dispatch = useDispatch();
  const history=useHistory()
 
  const [show, setShow] = useState(false);
  useEffect(()=>{
    if(success){
      history.push('/')
    }
  },[success, history])
  const handleClick = () => setShow(!show);
 
  const onSubmit = async (values) => {
   
    dispatch(loginInAction(values)) 
  
  }

  return (   
    <Flex alignItems="center" justifyContent="center" flexDirection="column" py='100px' bg='#ffff'>      
      <Box p={10} bg="gray.100">        
        <Box mb={8} textAlign="center">
          <Heading>Login</Heading>
          <Text color='red' fontSize='13px' mt='10px' textAlign='center'>{error && error}</Text>
        </Box>     
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >         
          {(props) => (
            <Form>             
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
                    <FormLabel htmlFor="email" mt={2}>Email</FormLabel>
                    <Input {...field} id="email" placeholder="Ingresa tu email" bg="white"/>
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>             
              <Field name="password" validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password} isRequired>
                    <FormLabel htmlFor="password" mt={2}>Contraseña</FormLabel>
                    <InputGroup>
                      <Input {...field} id="password" type={show ? "text" : "password"} placeholder="Ingresa tu contraseña" bg="white"/>
                    
                      <InputRightElement>
                        <Button mr={1} p={3} w="10rem" size="sm" onClick={handleClick}>
                          {show ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>         
              <Button width="full" mt={10} colorScheme="blue" type="submit" isLoading={loading} isDisabled={loading}>
                Ingresar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

export default Login;
