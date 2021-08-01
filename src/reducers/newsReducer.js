import { createSlice } from '@reduxjs/toolkit';

export const newsReducer = createSlice ({
    name: 'news',
        initialState:{
            news: [],
            newDetails: null,
            loading:null,
            error:null  
        },

        reducers:{
            obtenerNews: (state, action) =>{
                state.news = action.payload;
                state.loading = false
            },
            agregarNews: (state, action) =>{
                state.news.push(action.payload);
                state.loading = false                                
            },
            newsFetching: (state) =>{
                state.loading = true
            },
            newsError: (state, action) =>{
                state.error = action.payload;
                state.loading = false
            },
            actualizarNew: (state, action) =>{
                state.news = state.news.map(noticia => noticia.id === action.payload.id ? action.payload : noticia);
                state.loading = false
                
            },
            noticiaActual: (state, action) =>{
                state.newDetails = action.payload
            },
            eliminarNoticia: (state, action)=>{
                
                state.news = state.news.filter(noticia=>noticia.id !== action.payload)                
            }
        }
})

export const { obtenerNews, agregarNews, actualizarNew, eliminarNoticia, noticiaActual, newsFetching, newsError } = newsReducer.actions;

export const obtenerNoticiasApi =  () => async dispatch => {
        dispatch(newsFetching())
    try {
        const respuesta = await fetch('http://ongapi.alkemy.org/api/news');
        const resultado = await respuesta.json();
            
        dispatch(obtenerNews(resultado.data))
        
    } catch (error) {
        dispatch(newsError(error.message));
    }

};

export const agregarNoticiaApi = noticia => async dispatch => {
    dispatch(newsFetching())
    try {               
        const respuesta = await fetch('http://ongapi.alkemy.org/api/news', {
            method: 'POST', 
            body: JSON.stringify(noticia), 
            headers:{
              'Content-Type': 'application/json'
            }})
        const resultado = await respuesta.json();
        console.log(resultado.data);
                
        dispatch(agregarNews(resultado.data))

     } catch (error) {
        dispatch(newsError(error.message));
    }
 }


 export const actualizarNoticiaApi = noticia => async dispatch => {
    
    dispatch(newsFetching())
   try {
       
       const resultado = await fetch(`http://ongapi.alkemy.org/api/news/${noticia.id}`, {
           method: 'PUT',
           body: JSON.stringify(noticia), 
           headers:{
             'Content-Type': 'application/json'
           }})

        dispatch(actualizarNew(resultado.data))

   } catch (error) {
    dispatch(newsError(error.message));
}
}

export const obtenerNoticiaActual = noticia => dispatch => {
    
    dispatch(noticiaActual(noticia))
}

export const eliminarNoticiaApi = id => async dispatch =>{
    
    try {
        await fetch(`http://ongapi.alkemy.org/api/news/${id}`, {
            method: 'DELETE',
        })
                                           
        dispatch(eliminarNoticia(id))

    } catch (error) {
    dispatch(newsError(error.message));
}
}   
export default newsReducer.reducer;
