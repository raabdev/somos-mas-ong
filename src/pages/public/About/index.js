import React, {useEffect} from "react";
import Loading from "components/Loading/index";
import Members from "components/public/About/Members"
import useFetch from '../../../hooks/useFetch'
import "./styles.css"
import {Title} from "components/public/SectionTitle/Title";
import { Container, Box } from "@chakra-ui/layout";

const About = () => {
  const {loading, error, response, fetchData}= useFetch()

  useEffect(()=>{
    fetchData('http://ongapi.alkemy.org/api/members')
            // eslint-disable-next-line
  },[])
  if(loading){
    return   <Container centerContent><Loading /></Container>
  }
  return (
    <>
    <div className="div-background">           
          <div>
            <h2>Sobre nosotros</h2>       
            <div>
              <p>  Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás
              y papás, abuelos y vecinos del barrio La Cava generando procesos
              de crecimiento y de inserción social.</p>
            </div>
        </div>     
    </div>
    <Box h={{base:'100%', sm:'100%', md:'100%', lg:'100vh', xl:'100vh'}}>
      {/* <hr className="line" />
      <h2 className="about-us-text">Miembros</h2> */}
      <Title title='Miembros' color='#9ac9fb'/>
    
     
      {!error && response  ? <Members data={response?.data} /> : <h3>Se produjo un error</h3> }
       
    
    </Box>
    </>
  );
};

export default About;
