import { Novelties } from 'components/public/Novelties'
import { Title } from "components/public/SectionTitle/Title/";
import {Box} from '@chakra-ui/react';
import "../About/styles.css"

import React from 'react'

const NewsPage = () => {
    return (<Box bg='#fff' mb='100px'>
        <div className="div-background" style={{background: "linear-gradient(to left, #0000005b, #1213138a, #0f2027aa), url('https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>           
            <div style={{width:"100%"}}>
                <h2>Novedades</h2>       
                <div>
                    <p>Enterate de las últimas noticias de Somos Más y las próximas acciones a desarrollarse. </p>
                </div>
            </div>     
        </div>
        <Title title="Novedades"  />
        <Novelties/>
        </Box>
    )
}

export default NewsPage
