import {Flex, Box, Image, Heading, Text, Grid} from "@chakra-ui/react";
import {FaLinkedin} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
import {Link} from 'react-router-dom'

import './styles.css';

function Members({data}) {  
    return(
        <Grid w='90%' m='auto' mt='20px' templateColumns="repeat(3, 1fr)" justifyContent='center' alignItems='center' display={{base:'block',sm:'block' ,md:'grid', lg:'grid' }} >
          {   data.slice(0, 6).map((item)=>{
            return <Flex key={item.name} w={{base:'300px', sm:'300px', md:'400px', lg:'400px'}}  m='auto' mb='40px' justifyContent={{lg:'center', xl:'center'}} >                      
                    <Image src={item.image} borderRadius="100%" mt='20px' mr='10px' boxSize={{base:'110px', sm:'110px', md:'150px',lg:'180px'}} objectFit='cover'  alt="Rostro del miembro de la ONG"  />               
                    <Box p={{base:'0px', sm:'0px', md:'20px', lg:'20px'}} m='auto'  ml={{base:'20px', sm:'20px', md:0, lg:'0'}} >
                      <Heading mt='20px' color='#9ac9fb' fontSize='20px'  >{item.name}</Heading>                      
                      <Text m='0' className="col-8 box-content"  fontSize='15px' my='10px'>{item.description}</Text>                     
                      <Box >
                        <Flex alignItems='center' m='5px'>
                          <Box mr='10px'>
                           <FaLinkedin/>
                          </Box>
                          <Link to='/'><Text fontSize='13px'>LinkedIn</Text></Link>
                        </Flex>
                        <Flex alignItems='center' m='5px'>
                          <Box mr='10px'>
                           <AiFillFacebook/>
                          </Box>
                          <Link to='/'><Text fontSize='13px'>Facebook</Text></Link>
                        </Flex>                       
                      </Box>                     
                    </Box>
                  </Flex>})          
          }
            
        </Grid>
        )
}

export default Members;