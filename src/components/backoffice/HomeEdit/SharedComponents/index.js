import React from 'react'
import {Text, Button} from '@chakra-ui/react'

export const EditBtn=({isSubmitting, isValid})=>{
  return <Button bg='#9AC9FB' mt='20px' type='submit' color='white' isLoading={isSubmitting} disabled={isSubmitting || !isValid}>
    Editar
  </Button>
}
export const ErrorText =({children})=>{
  return  <Text color='red' fontSize='sm'>{children}</Text>
}