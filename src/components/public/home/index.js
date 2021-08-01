import React, { useEffect } from 'react';
import { Box, Heading } from "@chakra-ui/react";
import fetchSlides from 'actions/homeActions';
import { useDispatch } from 'react-redux'
import NovedadesSection from './NovedadesSection';
import TestimonialsSection from './TestimonialsSection';
import Hero from '../Hero';




const Home = () => {

    /* const { title, slides, loading, error } = useSelector( state => state.reducerHome ); */

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSlides())
    }, [dispatch])

    return ( 
        <>
        <Box  alignItems="center" >          
           <Hero>
             <Heading 
                w={{base:'50%', sm:'50%', md:'70%', lg:'70%'}} 
                m='auto' 
                pt='12%'  
                color='white' 
                fontSize={{base:'20px', sm:'20px', md:'33px', lg:'33px'}}
                textAlign="center"
                fontWeight="normal"
                fontStyle="italic"
             >
             Trabajar articuladamente con los distintos aspectos de la vida de las familias, generando espacios de desarrollo personal y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.
             </Heading>
           </Hero>
           <NovedadesSection/>
           <TestimonialsSection />
            
        </Box>        
        </>        
     );
}
 
export default Home;



