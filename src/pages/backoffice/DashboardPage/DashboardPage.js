import React, {useEffect} from 'react'
import gsap, { Power3 } from "gsap";
import { Box, Heading } from '@chakra-ui/layout';
import './index.css'

export const DashboardPage = () => {
   
    useEffect(() => {

        let tl = gsap.timeline({yoyo: true});
        
        tl.from(
            '#triangle',
            {
                duration: 1,
                opacity: 0,
                x: -200,
                ease: Power3.easeOut,
            }
        )
    
        tl.from(
            '#square',
            {
                duration: 1,
                opacity: 0,
                y: 200,
                ease: Power3.easeOut,
            }
        )
    
        tl.from(
            '#circle',
            {
                duration: 1,
                opacity: 0,
                y: -200,
                ease: Power3.easeOut,
            }
        )
        
        tl.from(
            '#dash',
            {
                duration: 1,
                opacity: 0,
                x: 200,
                ease: Power3.easeOut,
            }
        )
        
        tl.from('#title', {
            duration: 1,
            opacity: 0,
            y: 200,
            ease: Power3.easeOut,
        })

        tl.from('#backoffice', {
            duration: 1,
            opacity: 0,
            y: 200,
            ease: Power3.easeOut,
        })
    
    }, [])

    return (

        <Box id='animationContainer' >

            <Box id='flexContainer' >

            <Heading  id='title' >  Somos Más  </Heading>

            <Heading id='backoffice'  > Back-Office </Heading>

                <Box  id='triangle' ></Box>

                <Box id='square' ></Box>

                <Box id='circle' ></Box>
                    
                <Box id='dash'></Box>

            </Box>
        </Box>
    )
}
