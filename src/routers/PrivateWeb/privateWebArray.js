import {createIdNumber} from '../../utils/generateId'
import { DashboardPage } from '../../pages/backoffice/DashboardPage/DashboardPage';
import { Slides }  from '../../pages/backoffice/slides/Slides';
import SlidesAdd  from '../../pages/backoffice/slides/components/SlidesAdd';
import Organization from '../../pages/backoffice/Organization/Organization';
import OrganizationEditForm from '../../pages/backoffice/Organization/organizationEdit/OrganizationEdit';
import MembersListPage from 'pages/backoffice/members/MembersPage';
import MembersCreateForm from 'pages/backoffice/members/membersCreateEdit/MembersCreate';
import MembersEditForm from 'pages/backoffice/members/membersCreateEdit/MembersEdit';

import { UsersListPage, CreateUsersPage, EditUsersPage } from 'pages/backoffice/users';
import News from '../../pages/backoffice/news';

import FormNew from '../../components/backoffice/NewsForm/FormNew';
import FormEdit from '../../components/backoffice/NewsForm/FormEdit';

import Activities from '../../pages/backoffice/activities/Activities';
import ActivitiesCreate from '../../pages/backoffice/activities/activitiesCreateEdit/ActivitiesCreate';
import ActivitiesEdit from '../../pages/backoffice/activities/activitiesCreateEdit/ActivitiesEdit';

import EditarTestimonio from '../../components/backoffice/testimonios/editarTestimonio';
import NuevoTestimonio from '../../components/backoffice/testimonios/nuevoTestimonio';
import Testimonios from '../../components/backoffice/testimonios/testimonios';

import Categories from '../../components/backoffice/categories/Categories'
import UseForm from '../../components/backoffice/categories/components/UseForm'




export const privateWebArray=[
  {
    id:createIdNumber(),
    component: <DashboardPage/>,
    path:'/backoffice'
  },
  {
    id:createIdNumber(),
    component: <Slides/>,
    path:'/backoffice/slides'
  },
  {
    id:createIdNumber(),
    component: <SlidesAdd/>,
    path: '/backoffice/slides/create'
  },
  {
    id:createIdNumber(),
    component: <Activities/>,
    path:'/backoffice/activities',
    name:'Actividades'
  },
  {
    id:createIdNumber(),
    component:<ActivitiesCreate/>,
    path:'/backoffice/activities/create'
  },
  {
    id:createIdNumber(),
    component:<ActivitiesEdit/>,
    path:'/backoffice/activities/:id'
  },
  {
    id:createIdNumber(),
    component:<UsersListPage/>,
    path:'/backoffice/users',
    name:'Usuarios'
  },
  {
    id:createIdNumber(),
    component:<CreateUsersPage/>,
    path:'/backoffice/users/create'
  },
  {
    id:createIdNumber(),
    component:<EditUsersPage/>,
    path:'/backoffice/users/:user_id'
  },
  {
    id: createIdNumber(),
    component:<Organization/>,
    path:'/backoffice/organization',
    name:'Organización'
  },
  {
    id:createIdNumber(),
    component:<OrganizationEditForm/>,
    path:'/backoffice/organization/edit'
  },
  {
    id:createIdNumber(),
    component:<Testimonios/>,
    path:'/backoffice/testimonials',
    name:'Testimonios'
  },
  {
    id:createIdNumber(),
    component:<NuevoTestimonio/>,
    path: '/backoffice/testimonials/create'
  },
  {
    id:createIdNumber(),
    component:<EditarTestimonio/>,
    path:'/backoffice/testimonials/edit/:id'
  },
  {
    id:createIdNumber(),
    component:<News/>,
    path:'/backoffice/news',
    name:'Novedades'
  },
  {
    id:createIdNumber(),
    component: <FormNew/>,
    path:'/backoffice/news/create'
  },
  {
    id:createIdNumber(),
    component:<FormEdit/>,
    path:'/backoffice/news/edit/:id'

  },
  {
    id: createIdNumber(),
    component: <MembersListPage />,
    path: '/backoffice/members',
    name:'Miembros'
  },
  {
    id:createIdNumber(),
    component: <MembersCreateForm/>,
    path:'/backoffice/members/create'
  },
  {
    id:createIdNumber(),
    component:<MembersEditForm/>,
    path:'/backoffice/members/:member_id'
  },
  {
    id:createIdNumber(),
    component: <UseForm/>,
    path:'/backoffice/categories/create'
  },
  {
    id:createIdNumber(),
    component: <UseForm/>,
    path:'/backoffice/categories/edit/:id'
  },
  {
    id:createIdNumber(),
    component: <Categories/>,
    path:'/backoffice/categories',
    name:'Categorías'

  }
]