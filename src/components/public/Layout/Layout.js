import React from 'react';
import { Box } from '@chakra-ui/layout';
import { NavBar } from '../Navbar/index'
import Footer from '../Footer'

export const Layout = ({children}) => {
    return (
        <Box className='global_transitions'>
            <NavBar/>
                {children}            
            <Footer />
        </Box>
    );
};

export default Layout;