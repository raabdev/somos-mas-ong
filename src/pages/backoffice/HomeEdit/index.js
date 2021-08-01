import WelcomeTextArea from 'components/backoffice/HomeEdit/WelcomeTextArea'
import Slides from '../../../components/backoffice/HomeEdit/SlidesEdit'
import React from 'react'
import { Divider} from '@chakra-ui/react'

const HomeEdit = () => {
  const welcomeTextFromApi='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  const slideFromApi=[
    {
      text:'texto slide 1',
      img:'https://images.unsplash.com/photo-1619783534111-5ca2fe2608c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      text:'texto slide 2',
      img:'https://images.unsplash.com/photo-1619732112649-6a871321df61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      text:'texto slide 3',
      img:'https://images.unsplash.com/photo-1619717244859-d1d0044dd244?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    }
  ]
  return (
    <>
      <WelcomeTextArea welcomeText={welcomeTextFromApi}/>
      <Divider w='80%' m='auto' p='20px' colorScheme='gray'/>
      <Slides mockUp={slideFromApi}/>
      
    </>
  )
}

export default HomeEdit
