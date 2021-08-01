import {Flex, Box, Button } from '@chakra-ui/react'

export const CurrentImg=({data, handleCurrentImg})=>{
  return <Flex  justifyContent='center' w='100%' alignContent='center' mt='15px'>
      {
        data.map( (slide, index) =>{
          return <>
                <Box  boxShadow="dark-lg" m='20px' w='15px' h='15px' borderRadius='100%' backgroundColor={handleCurrentImg(index)}/>
          </> 
        })
      }
  </Flex> 
}

export const SliderBtn=({icon, handleSlide, direction})=>{
  return <Button border='none' bg='transparent' mt={{base:'35px', md:'35px', lg:'220px'}} mr='30px' ml='30px'  fontSize='20px' onClick={()=> handleSlide(direction)}>
          {icon}
        </Button> 
}
export const ResponsiveContainer=({children})=>{
  return  <Box display={{base:'none', md:'none', lg:'block', xl:'block'}}>
    {children}
  </Box>
}