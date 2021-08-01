import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Heading } from "@chakra-ui/react"


export const ImageTitle = ({title, image, colorTitle}) => {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Heading
                color={colorTitle ? colorTitle : '#fff'}
                fontWeight="bolder"
                position='absolute'
            >
            {title}
            </Heading>
            <Box 
                w="100%"
                h='300px'
                backgroundImage={`url(${image})`}
                backgroundPosition='center'
                backgroundSize='contain'
                backgroundAttachment='fixed'
                bgRepeat='no-repeat'
            />
        </Box>
    );
};

export default ImageTitle;