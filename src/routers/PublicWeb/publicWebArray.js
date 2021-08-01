import {createIdNumber} from '../../utils/generateId'

import Login from '../../components/Login'

import Register from '../../components/Register';

import Home from 'components/public/home';

import About from '../../pages/public/About'
import Description from 'components/public/About/Description';
import Members from '../../components/public/About/Members';
import { Activities } from '../../components/public/Activities/Activities'

import { ContactIndex } from '../../components/public/contact/index';

import { Donate } from 'components/public/Donate/Donate';
import TestimonialsPage from 'pages/public/Testimonials';
import { Thanks } from 'components/public/Thanks/Thanks';
import ActivityDetails from 'components/public/Activities/components/ActivityDetails';
import NewsPage from '../../pages/public/News'
import NewsDetail from 'pages/public/News/Detail';
import TestimonialsDetail from "components/public/Testimonials/TestimonialDetail"


export const publicWebArray=[
  {
    id: createIdNumber(),
    component: <Home/>,
    path:'/',
    name:'Inicio'
  }, 
  {
    id: createIdNumber(),
    component: <About/>,
    path:'/nosotros',
    name:'Nosotros'
  },  
  {
    id: createIdNumber(),
    component: <Description/>,
    path:'/nosotros/description'
  },
  {
    id: createIdNumber(),
    component: <Members/>,
    path:'/nosotros/members'
  },
  {
    id:createIdNumber(),
    component: <Activities/>,
    path:'/activities',
    name:'Actividades'
  },
  {
    id:createIdNumber(),
    component: <ActivityDetails/>,
    path:'/activities/:id'
  },
  {
    id:createIdNumber(),
    component: <NewsPage/>,
    path:'/novelties',
    name:'Novedades'
  },
  {
    id:createIdNumber(),
    component: <NewsDetail />,
    path:'/novelties/:id'
  },
  {
    id:createIdNumber(),
    component: <TestimonialsPage/>,
    path:'/testimonials',
    name:'Testimonios'
  },
  {
    id:createIdNumber(),
    component: <TestimonialsDetail />,
    path:'/testimonials/:id'
  },
  {
    id:createIdNumber(),
    component:<ContactIndex/>,
    path:'/contact',
    name:'Contacto'
  },
  {
    id:createIdNumber(),
    component:<Register/>,
    path:'/register'
  },
 
  {
    id:createIdNumber(),
    component:<Login/>,
    path:'/login'
  },
 
  {
    id:createIdNumber(),
    component:<Donate/>,
    path:'/donate',
    
  },
 
  
 
  {
    id:createIdNumber(),
    component: <Thanks/>,
    path:'/gracias'
  }
]
