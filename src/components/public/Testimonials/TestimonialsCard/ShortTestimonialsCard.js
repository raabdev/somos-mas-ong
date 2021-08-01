import React from 'react'
import {Box, Image, Text, Heading} from '@chakra-ui/react'
import {lengthText} from "../../../../utils/lengthText"
import HtmlText from "../../../public/Activities/components/HtmlText";

const ShortTestimonialsCard = ({name, text, img, height, width, imgWidth, imgHeight, shorterText}) => {
  return (
    <>
      <Box w={width} h={height} mt='4.7%' mb='30px' bg='#F4F4F4' borderRadius='2px' boxShadow={"3px 5px 8px 0px rgba(50, 50, 50, 0.3)"} >
        <Image borderRadius='2px 2px 0 0 ' boxShadow="lg" w={imgWidth} h={imgHeight} objectFit='cover' src={img}/>
        <Box>
          <Heading fontSize='23px' color='#9AC9FB' textAlign='center' mt='15px'>{name}</Heading>
          {shorterText ?
          <Text fontSize='13px' p='20px'><HtmlText text={lengthText(text,100)} /></Text> :
          <Text fontSize='13px' p='20px'><HtmlText text={text} /></Text>
          }
        </Box>
      </Box>
    </>
  )
}

export default ShortTestimonialsCard
