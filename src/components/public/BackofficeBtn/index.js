import React from 'react'
import {Button, Box} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const BackofficeBtn = ({isOpen}) => {

  const { isLoggedIn } = useSelector(state=> state.auth)

  if (!isLoggedIn) return <></>

  return (
    <>  
      <Box display={{base: isOpen? 'block':'none', sm:isOpen? 'block':'none', md:'block', lg:'block'}}>
          <Link to='/backoffice'>
            <Button marginRight='10px' bg='' w='100px' h='40px' color='#db5752'  borderRadius='30px' _hover={{bg:"#e86f6b", color:'#fff'}}>
                Backoffice
            </Button>
          </Link>
      </Box>
      
    </>
  )
}

export default BackofficeBtn