import { createSlice } from '@reduxjs/toolkit';
export const authReducer = createSlice ({
    name: 'auth',
        initialState: {
            isLoggedIn:false,
            email:null,
            token:null,
            name:null,
            role:null,            
            loading:false,
            error:null,
            success:null
        },

        reducers:{
           authLoading:(state)=>{
            state.loading=true
           },
           authError:(state, action)=>{
            state.error=action.payload
            state.loading=false
           },
           login:(state, action)=>{
            state.name=action.payload.data.user.name
            state.email= action.payload.data.user.email 
            state.token=action.payload.data.token
            state.role=action.payload.data.user.role_id
            state.success=action.payload.success
            state.isLoggedIn=true
            state.loading=false
            state.error=null
           },
           register: (state, action)=>{
               state.loading=false
               state.name=action.payload.data.user.name
               state.email=action.payload.data.user.mail
               state.token=action.payload.data.token
               state.success=action.payload.success
               state.isLoggedIn=true
               state.error=null
           },
           logout:(state)=>{
               state.isLoggedIn=false
               state.loading=false
               state.name=null
               state.email=null
               state.token=null
               state.role=null
               state.success=null
               state.loading=false
               state.error=null
           }
        }
})
export const { login, register, logout, authLoading, authError } = authReducer.actions;

export const loginInAction = data => async dispatch=>{
    dispatch(authLoading())
    try {
        const response= await fetch('http://ongapi.alkemy.org/api/login',{
                method:'POST',
                body: JSON.stringify(data), 
                headers:{
                    'Content-Type': 'application/json'
                }})
        const result = await response.json();
      
        dispatch(login(result))
        
    } catch (error) {
        console.log(error.message)
        dispatch(authError(error.message))
    }
}
export const registerAction = data => async dispatch=>{
    dispatch(authLoading())
    try {
        const response= await fetch('http://ongapi.alkemy.org/api/register',{
                method:'POST',
                body: JSON.stringify(data), 
                headers:{
                    'Content-Type': 'application/json'
                }})
        const result = await response.json();
        
        dispatch(register(result))
        
    } catch (error) {
        dispatch(authError(error))
    }
}

export default authReducer.reducer;