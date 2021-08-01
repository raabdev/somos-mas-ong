import React, {useState} from 'react'
import {sliderMock} from './sliderMockup'
import {Flex, Image, Text, Box } from '@chakra-ui/react'
import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import { CurrentImg, ResponsiveContainer, SliderBtn } from './SliderComponents'

const Slider = () => {  
  const [slide, setSlide]=useState(0)  
  const handleCurrentImg=(index)=>{
    if(index === slide){
      return '#687980'
    }else{
      return 'black'
    }
  }  
  const handleSlide=(direction)=>{
   if (direction === 'rigth'){
      if (sliderMock.length - 1 <= slide) {
        setSlide(0);      
      }else{
        setSlide(slide + 1);    
      }      
   }else if(direction === 'left'){
      if(slide === 0 ){
        setSlide(sliderMock.length -1)
      }else{
        setSlide(slide-1)
      }
    }    
  }
  return (
    <>
    <Flex w='100%' justifyContent='center' my='40px' > 
      <ResponsiveContainer children={ <SliderBtn icon={<ArrowLeftIcon/>} handleSlide={handleSlide} direction='left'/>}/>        
      <Box >
        <Text fontSize='4xl' textAlign='center' m='20px'>{sliderMock[slide].title} </Text>       
        <Image key={slide} opacity='1' src={sliderMock[slide].img} w={{base:'325px', md:'325px', lg:'500px' , xl:'600px'}} h='400px' objectFit='cover' borderRadius='10px' boxShadow='dark-lg'/>             
        <CurrentImg data={sliderMock} handleCurrentImg={handleCurrentImg}/>
        <Text fontSize='2xl' textAlign='center' m='10px'>{sliderMock[slide].description}</Text>
      </Box>
      <ResponsiveContainer children={<SliderBtn icon={<ArrowRightIcon/>} handleSlide={handleSlide} direction='rigth' />}/>    
    </Flex>
      <Box textAlign='center' m='20px' display={{base:'block', md:'block', lg:'none', xl:'none'}}>
        <SliderBtn icon={<ArrowLeftIcon/>} handleSlide={handleSlide} direction='left'/>        
        <SliderBtn icon={<ArrowRightIcon/>} handleSlide={handleSlide} direction='rigth'/>
      </Box>
    </>   
  )
}

export default Slider
