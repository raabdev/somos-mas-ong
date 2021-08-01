import { createSlice } from '@reduxjs/toolkit';

export const testimonialsReducer = createSlice ({
    name: 'testimonios',
        initialState:{
            testimonios: [],
            testimonio: null,
            loading:null,
            error:null  
        },

        reducers:{
            obtenerTestimonios: (state, action) =>{
                state.testimonios = action.payload;
                state.loading = false
            },
            agregarTestimonios: (state, action) =>{
                state.testimonios.push(action.payload);
                state.loading = false                                
            },
            testimoniosFetching: (state) =>{
                state.loading = true
            },
            testimonioError: (state, action) =>{
                state.error = action.payload;
                state.loading = false
            },
            actualizarTestimonio: (state, action) =>{
                state.testimonios = state.testimonios.map(testimonio => testimonio.id === action.payload.id ? action.payload : testimonio);
                state.loading = false
                
            },
            testimonioActual: (state, action) =>{
                state.testimonio = action.payload
            },
            eliminarTestimonio: (state, action)=>{
                
                state.testimonios = state.testimonios.filter(testimonio=>testimonio.id !== action.payload)                
            }
        }
})

export const { obtenerTestimonios, agregarTestimonios, actualizarTestimonio, eliminarTestimonio, testimonioActual, testimoniosFetching, testimonioError } = testimonialsReducer.actions;

export const obtenerTestimoniosApi =  () => async dispatch => {
        dispatch(testimoniosFetching())
    try {
        const respuesta = await fetch('http://ongapi.alkemy.org/api/testimonials');
        const resultado = await respuesta.json();
            
        dispatch(obtenerTestimonios(resultado.data))
        
    } catch (error) {
        dispatch(testimonioError(error.message));
    }

};

export const agregarTestimonioApi = testimonio => async dispatch => {
    dispatch(testimoniosFetching())
    try {               
        await fetch('http://ongapi.alkemy.org/api/testimonials', {
            method: 'POST', 
            body: JSON.stringify(testimonio), 
            headers:{
              'Content-Type': 'application/json'
            }})
        
                
        dispatch(agregarTestimonios(testimonio))

     } catch (error) {
        dispatch(testimonioError(error.message));
    }
 }


 export const actualizarTestimonioApi = testimonio => async dispatch => {
    console.log(testimonio)
    dispatch(testimoniosFetching())
   try {
       
       const resultado = await fetch(`http://ongapi.alkemy.org/api/testimonials/${testimonio.id}`, {
           method: 'PUT',
           body: JSON.stringify(testimonio), 
           headers:{
             'Content-Type': 'application/json'
           }})
           
           const result = await resultado.json()
           console.log(result)
        dispatch(actualizarTestimonio(result.data))

   } catch (error) {
    dispatch(testimonioError(error.message));
    console.log(error)
}
}

export const obtenerTestimonioActual = testimonio => dispatch => {
    
    dispatch(testimonioActual(testimonio))
}

export const eliminarTestimonioApi = id => async dispatch =>{
    
    try {
        await fetch(`http://ongapi.alkemy.org/api/testimonials/${id}`, {
            method: 'DELETE',
            })
                                           
        dispatch(eliminarTestimonio(id))

    } catch (error) {
    dispatch(testimonioError(error.message));
}
}   
export default testimonialsReducer.reducer;

