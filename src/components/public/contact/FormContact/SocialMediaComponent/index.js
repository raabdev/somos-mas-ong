import React from 'react'
import {Flex,Image,Link} from '@chakra-ui/react';
import IgIcon from '../../../../../assets/SocialMediaIcons/instagram.png'
import TwIcon from '../../../../../assets/SocialMediaIcons/twiiter.png'
import LinkedInIcon from '../../../../../assets/SocialMediaIcons/linkedIn_PNG38.png'
import FacebookIcon from '../../../../../assets/SocialMediaIcons/facebook.png'
const SocialMedia = ({marginX}) => {
  return (      
      <Flex  display="flex" >
        <Link href="https://www.instagram.com/SomosMás/" isExternal >
           <Image boxSize="45px" ml={{base:'7px', sm:'7px'}} mx={marginX} mb='10px'  src={IgIcon}/>
        </Link>
        <Link href="https://www.twitter.com/SomosMás/" isExternal>
          <Image boxSize="40px" mt='2px' mx={marginX} mb='10px' src={TwIcon}/>
        </Link>
        <Link  href="https://www.linkedin.com/Somos_Más/" isExternal >
           <Image boxSize='40px' mt='2px' mx={marginX} mb='10px' src={LinkedInIcon}/>
        </Link>
        <Link  href="https://www.facebook.com/Somos_Más/" isExternal >
          <Image boxSize='40px' mt='2px' mx={marginX} mb='10px' src={FacebookIcon}/>
        </Link>
      </Flex>
   
  )
}

export default SocialMedia
