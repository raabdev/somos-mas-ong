import React from 'react'
import {Button, Box} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
const DonarBtn = ({isOpen}) => {
  return (
    <>  
      <Box display={{base: isOpen? 'block':'none', sm:isOpen? 'block':'none', md:'block', lg:'block'}}>
          <Link to='/donate'>
            <Button bg='#db5752' w='100px' h='40px' color='#ffff'  borderRadius='30px' _hover={{bg:"#e86f6b"}}>
                Donar
            </Button>
          </Link>
      </Box>
      
    </>
  )
}

export default DonarBtn
