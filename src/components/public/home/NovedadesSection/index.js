import React, {useEffect} from 'react'
import Card from 'components/Card/Card'
import {Box, Button, Flex} from '@chakra-ui/react'
import SkeletonComponent from './SkeletonComponent/'
import './novedad.css'
import useFetch from '../../../../hooks/useFetch'
import { useHistory } from 'react-router-dom'
import {Title} from "components/public/SectionTitle/Title";



const NovedadesSection = () => {
  const {loading, error, response, fetchData}=useFetch()
  const history = useHistory();

  useEffect(()=>{
    fetchData('http://ongapi.alkemy.org/api/news')
        // eslint-disable-next-line
  },[]) 
 
  
  
  return (
    <> 
       
       <Flex  
        className='gradient' 
        h={{base:'100%', sm:'100%', md:'100vh', lg:'110vh', custom:'130vh',xl:'100vh'}} 
        w='100%' 
        display={{base:'block', sm:'block', md:'flex', lg:'flex'}} >
          <Box 
            w={{base:'100%', sm:'100%', md:'50%', lg:'50%'}} 
            display='flex' flexDirection='column' 
            mt={{base:'0', sm:'0', md:'20px', lg:'20px'}}            
            >            
            <Title 
              title={"Ultimas Novedades"} 
              color={"#db5752"}
               
              />
            <Button 
              bg='#db5752' 
              color='#ffff' 
              w={{base:'220px', sm:'220px', md:'330px', lg:'330px'}} 
              h={{base:'40px', sm:'40px', md:'60px', lg:'60px'}} 
              fontSize={{base:'18px', sm:'18px', md:'25px', lg:'25px'}} 
              ml={{base:'20%', sm:'20%', md:'14.5%'}}
              mt={{base:'50px', sm:'50px', md:'200px',lg:'200px'}}
              mb='50px'
              boxShadow="xl"  
              _hover={{bg:"#e86f6b"}}
              onClick={()=>history.push('/novelties')}>
              Ver todas las novedades
            </Button>
          </Box>
          <Box             
            w={{base:'100%', sm:'100%', md:'50%', lg:'30%'}}
            display='flex' 
            flexDirection='column' 
            justifyContent='center'
            pt='20px'
            ml={[null, null, null, '10%','10%','10%']}
           
            >
              
            {
              loading ? <SkeletonComponent/> : error? <h1>Se produjo un error</h1> :response?.data.slice(0,3).map(actividad =>{
                return <Card 
                  key={actividad.id}
                  titleCard={actividad.name}
                  imgCard={actividad.image}
                  descriptionCard={actividad.content}
                  altImg='actividad'                 
                  widthCard='340px'
                  maxHeight='100px'                  
                  textColorCard='black'                 
                  marginRigth='auto'
                  marginButton={{base:'auto', sm:'auto', md:'10px', lg:'10px'}}
                  marginTop='10px'
                  paddingCard='10px'
                  isLoading={loading}
                />
              })
            }
          </Box>
        </Flex>
    </>
  )
}

export default NovedadesSection
