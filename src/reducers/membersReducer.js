import { createSlice } from '@reduxjs/toolkit';

export const membersReducer = createSlice ({
    name: 'members',
        initialState:{
            members: [],
            member: null,
            loading:null,
            error:null  
        },

        reducers:{
            getMembers: (state, action) =>{
                state.members = action.payload;
                state.loading = false
            },
            addMember: (state, action) =>{
                state.members.push(action.payload);
                state.loading = false                                
            },
            membersFetching: (state) =>{
                state.loading = true
            },
            memberError: (state, action) =>{
                state.error = action.payload;
                state.loading = false
            },
            updateMember: (state, action) =>{
                state.members = state.members.map(member => member.id === action.payload.id ? action.payload : member);
                state.loading = false
            },
            deleteMember: (state, action)=>{
                state.members = state.members.filter(member=>member.id !== action.payload)                
            },
            currentMember: (state,action) => {
                state.member = action.payload
            }
        }
})

export const { membersFetching, getMembers, currentMember, addMember, updateMember, deleteMember, memberError} = membersReducer.actions;

export const obtenerMembersApi =  () => async dispatch => {
    dispatch(membersFetching())
try {
    const respuesta = await fetch('http://ongapi.alkemy.org/api/members');
    const resultado = await respuesta.json();
        
    dispatch(getMembers(resultado.data))
    
} catch (error) {
    dispatch(memberError(error.message));
}

};

export const agregarMembersApi = member => async dispatch => {
dispatch(membersFetching())
try {               
    const respuesta = await fetch('http://ongapi.alkemy.org/api/members', {
        method: 'POST', 
        body: JSON.stringify(member), 
        headers:{
          'Content-Type': 'application/json'
        }})
    const resultado = await respuesta.json();
            
    dispatch(addMember(resultado.data))

 } catch (error) {
    dispatch(memberError(error.message));
}
}


export const actualizarMemberApi = member => async dispatch => {
console.log(member)
dispatch(membersFetching())
try {
   
   const resultado = await fetch(`http://ongapi.alkemy.org/api/members/${member.id}`, {
       method: 'PUT',
       body: JSON.stringify(member), 
       headers:{
         'Content-Type': 'application/json'
       }})
       
       const result = await resultado.json()
       console.log(result)
    dispatch(updateMember(result.data))

} catch (error) {
dispatch(memberError(error.message));
console.log(error)
}
}

export const obtenerMemberActual = member => dispatch => {

dispatch(currentMember(member))
}

export const eliminarMemberApi = id => async dispatch =>{

try {
    await fetch(`http://ongapi.alkemy.org/api/members/${id}`, {
        method: 'DELETE',
        })
                                       
    dispatch(deleteMember(id))

} catch (error) {
dispatch(memberError(error.message));
}
}   

export default membersReducer.reducer;


