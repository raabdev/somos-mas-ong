import React from 'react'
import {Textarea, Box, Text } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { EditBtn, ErrorText } from '../SharedComponents';

const WelcomeTextArea = ({welcomeText}) => {
  const validate = values =>{
    const errors ={}
    if (!values.welcomeText){
      errors.welcomeText='Por favor ingrese un texto'
    }else if (values.welcomeText.length <= 20){
      errors.welcomeText='El mínimo son 20 caracteres'
    }
    return errors
  }
  const formik = useFormik({
    initialValues: {
      welcomeText,
    },
    validate,
    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <Box w={{base:'450px', sm:'450px', md:'700px', lg:'800px'}} px='20px' textAlign='center' m='auto'>
     <form onSubmit={formik.handleSubmit}>
      <Text m='30px' fontSize='4xl'>Texto De Bienvenida</Text>          
          <Textarea h='150px' isInvalid={formik.errors.welcomeText} onChange={formik.handleChange} value={formik.values.welcomeText} onBlur={formik.handleBlur} name='welcomeText' />         
          {formik.touched.welcomeText && formik.errors.welcomeText ? <ErrorText children={formik.errors.welcomeText}/> : null}
          <EditBtn isSubmitting={formik.isSubmitting} isValid={formik.dirty} />
     </form>
    </Box>
  )
}

export default WelcomeTextArea
