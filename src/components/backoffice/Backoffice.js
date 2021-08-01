import Header from "./layout/header/index"
import Sidebar from "./sidebar/index"
import React from "react"
import {useState} from "react"
import { Box} from "@chakra-ui/react"

function BackofficeLayOut({children}) {

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleOpen = () => {
        setOpenSidebar(!openSidebar)
    }

    return (<>
    <Box>
    <Header handleHambIcon={handleOpen}/> 

    </Box>

    <Sidebar isOpen={openSidebar} handleOpen={handleOpen}/>
    {children}
    
    </>)
}


export default BackofficeLayOut