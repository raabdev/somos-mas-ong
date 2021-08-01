import React from 'react'
import Card from 'components/Card/Card'
import {Text, Box} from '@chakra-ui/react'
const ActivitiesSection = () => {
  const mockActividades=[
    {
        id:1,
        title:'titlo 1',
        description:'description 1',
        img:'https://images.unsplash.com/photo-1611095971113-9f7542655338?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
    {
        id:2,
        title:'title 2',
        description:'descrip 2',
        img:'https://images.unsplash.com/photo-1620414402841-857c6e0fee3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
    ]
  return (
    <Box>
     <Text textAlign='center' fontSize='50px'>Actividades</Text>
      {
        mockActividades.map(actividad =>{
          return <Card 
            titleCard={actividad.title}
            imgCard={actividad.img}
            descriptionCard={actividad.description}
            altImg='actividad'
            isLoading={false}
            widthCard='500px'
            maxHeight='100px'
            paddingCard='10px'
            textColorCard='black'
            colorCard='white'
            
            
          />
        })
      }
    </Box>
  )
}


export default ActivitiesSection
