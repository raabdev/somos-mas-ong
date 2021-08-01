import React from 'react';
import './sidebar.css'

import closeBtn from '../../../assets/closeBtn.png'
import { MenuItem } from '../../public/Navbar/MenuItem'
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import LinkContainer from '../../public/Sidebar/LinkContainer/'

import { logout } from 'reducers/authReducer';
import {Text} from '@chakra-ui/react'
import {privateWebArray} from '../../../routers/PrivateWeb/privateWebArray'
import {Logo}  from '../../Logo'

const Sidebar = ({ isOpen, handleOpen}) => {
  const dispatch= useDispatch()
  const {isLoggedIn, name} = useSelector(state=> state.auth)
 
  const { push } = useHistory();
  const redirectTo = btn => {
    if (btn === "logout") console.log("signout");
    if (btn === "login") push("/login");
    if (btn === "register") push("/register");
  };
  return (
    <div onClick={()=> handleOpen()} >
      <aside className={`sidebar ${isOpen && `show-sidebar`}`}>
        <div className='sidebar_header'>
          <div className='closeBtn_container' >
            <button onClick={()=>handleOpen()}><img src={closeBtn} alt="X"/></button>
          </div>
          <div className='img_container'>
            <Logo/>
          </div>
         
          <ul>
          {
            isLoggedIn && 
            <LinkContainer>
              <MenuItem><Text color='black' fontWeight='500'>{name}</Text></MenuItem>
            </LinkContainer>            
          }
            { privateWebArray.map(link => {
              if(link.name){
              return <LinkContainer>
                        <MenuItem to={link.path} key={link.id}>
                          {link.name}
                        </MenuItem>     
                    </LinkContainer>            
              }
              else return <></>
              
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
             
          </ul>
          
        </div>

      </aside>
    </div>
  )
}


export default Sidebar
