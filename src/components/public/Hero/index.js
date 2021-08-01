import {Box} from '@chakra-ui/react'
import './hero.css'
const Hero = ({children}) => {
  return (
    <Box  className='gradientHero'  position='relative' m='0'  w='100%' h='600px'  backgroundImage='' >
      
        {children}
    </Box>
  )
}

export default Hero