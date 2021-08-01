import React from 'react';
import './sidebar.css'
import logo from '../../../assets/LOGO-SOMOS MAS.png'
import closeBtn from '../../../assets/closeBtn.png'
import { MenuItem } from '../Navbar/MenuItem'
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import LinkContainer from './LinkContainer/'
import DonarBtn from '../DonarBtn/index,';
import { logout } from 'reducers/authReducer';
import {Text} from '@chakra-ui/react'
import BackofficeBtn from '../BackofficeBtn';


const Sidebar = ({ isOpen, handleOpen, links}) => {
  const dispatch= useDispatch()
  const {isLoggedIn, name} = useSelector(state=> state.auth)
  
  const { push } = useHistory();
  const redirectTo = btn => {
    if (btn === "logout") console.log("signout");
    if (btn === "login") push("/login");
    if (btn === "register") push("/register");
  };
  return (
    <div onClick={()=> handleOpen()} className={isOpen ? `backdrop` : ''}>
      <aside className={`sidebar ${isOpen && `show-sidebar`}`}>
        <div className='sidebar_header'>
          <div className='closeBtn_container' >
            <button onClick={()=>handleOpen()}><img src={closeBtn} alt="X"/></button>
          </div>
          <div className='img_container'>
            <img src={logo} alt='ong-Logo'/>
          </div>
         
          <ul>
          {
            isLoggedIn && 
            <LinkContainer>
              <MenuItem><Text color='black'  fontWeight='500'>{name}</Text></MenuItem>
            </LinkContainer>            
          }
            { links.map(link => {
              if(link.name){
              return <LinkContainer key={link.path}>
                        <MenuItem to={link.path} key={link.id}>
                          {link.name}
                        </MenuItem>     
                    </LinkContainer>            
              }
              
            })}
            {isLoggedIn ? (
              <LinkContainer>
                <MenuItem onClick={() =>  dispatch(logout())}>
                  <Text color='black'>Cerrar sesión</Text>
                </MenuItem>
                </LinkContainer>
              ) : (
                <>
                <LinkContainer>
                  <MenuItem onClick={() => redirectTo("login")}>Log in</MenuItem>
                </LinkContainer>
                <LinkContainer>
                  <MenuItem onClick={() => redirectTo("register")}>Registrate</MenuItem>
                </LinkContainer>
                </>
              )}
              <LinkContainer>
                <DonarBtn isOpen={isOpen}/>
              </LinkContainer>
              <LinkContainer>
                <BackofficeBtn isOpen={isOpen}/>
              </LinkContainer>
          </ul>
          
        </div>

      </aside>
    </div>
  )
}

export default Sidebar
