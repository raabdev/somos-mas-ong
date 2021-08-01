import React from 'react';
import { Box } from '@chakra-ui/layout';
import './styles.css'

export const Title = (props) => {
    const {title, image} = props;
      
    return (
        <Box
            w="100%"
            minW="100%"
            maxH="15vh"
            position="relative"
            overflow="hidden"
            bg="black"
        >
            <h1 className='textTitleComponent'>{title}</h1>
            {
                !image ?
                <img className='imageTitleComponent' src={'https://www.colorhexa.com/90caf9.png'} alt='Imagen del titulo' />
                :
                <img className='imageTitleComponent' src={image} alt='Imagen del titulo' />
            }
        </Box>
    );
};

export default Title;