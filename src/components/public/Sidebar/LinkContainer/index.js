import React from 'react'
import {Box} from '@chakra-ui/react'
const LinkContainer = ({children}) => {
  return (
    <Box m='auto' w={{base:'100px', sm:'100px', md:'150px', lg:'150px'}} mt={{base:'2px', sm:'2px', md:'20px', lg:'20px'}}>
      {children}
    </Box>
  )
}

export default LinkContainer
