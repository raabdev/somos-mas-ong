import React from 'react'
import {Button} from '@chakra-ui/react'

const BtnsNav = ({children}) => {
  return (
    <Button 
      borderRadius='0.5rem'
      bg='#db5759'
      color='#fff'
      mx='8px'
      pb='3px'
      _hover={{bg:"#e86f6b"}}
    >{children}</Button>
  )
}

export default BtnsNav
