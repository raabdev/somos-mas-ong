import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Heading, Text, Image, SkeletonCircle } from "@chakra-ui/react"
import { lengthText } from '../../utils/lengthText'
import HtmlText from 'components/public/Activities/components/HtmlText';

export const Card = (
  {
        titleCard,
        imgCard,
        altImg,
        descriptionCard,
        isLoading,
        widthCard,
        maxHeight,
        marginCard,
        paddingCard,
        textColorCard,
        colorCard,
        marginLeft,
        marginRigth,
        marginTop,
        marginButton
  }
) => {

  return (
    <>
       {   isLoading ? 
            <SkeletonCircle width="150px" h='150px' my='auto'/>
            :
            <Box 
                background={colorCard}
                w={`${widthCard}`}                
                display='flex'
                flexDirection='row'
                maxH={`${maxHeight}vh`}
                p={`${paddingCard}`} 
                // m={`${marginCard}`}
                mt= {marginTop}
                mb= {marginButton}              
                ml={marginLeft}
                
                          
            >
                
                <Image 
                    src={!imgCard ? 'https://www.guwahatiplus.com/public/web/images/default-news.png' : imgCard} 
                    alt={altImg}
                    objectFit='cover'
                    w={{base:'100px', sm:'100px', md:'140px', lg:'180px', xl:'220px'}}
                    h={{base:'100px', sm:'100px', md:'140px', lg:'180px', xl:'220px'}}
                    borderRadius='3%'
                    m='auto'
                    mb={{base:'70px', sm:'70px', md:'30px', lg:'30px'}}
                    mr='25px'
                    mt='10px'
                    boxShadow="2xl"

                />
                
                <Box m='auto' mb='25px'>

                <Heading 
                    color={textColorCard}
                    fontSize='1.2em'
                    m='auto'
                    mb='20px'
                    textAlign='center'
                    fontWeight='500'
                > 
                    {titleCard} 
                </Heading>

                <Text 
                    color={textColorCard} 
                    fontSize='0.9em'
                    p='0 4% 4% 4%'
                    m='auto'
                    mb={{base:'0', sm:'0', md:'1.5rem', lg:'1.5rem'}}
                    w={{base:'200px', sm:'200px', md:'300px', lg:'300px'}} 
                    >
                        <HtmlText text={lengthText(descriptionCard, 200)} />                
                     
                </Text>
                </Box>

            </Box>
        }
    </>
  );
};

export default Card;