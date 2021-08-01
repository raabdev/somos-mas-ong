import { createSlice } from '@reduxjs/toolkit';

export const categoriesReducer = createSlice ({
    name: 'categories',
        initialState:{
            categories: [],
            category: null,
            loading:null,
            error:null  
        },

        reducers:{
            getCategories: (state, action) =>{
                state.categories = action.payload;
                state.loading = false
            },
            addCategory: (state, action) =>{
                state.categories.push(action.payload);
                state.loading = false                                
            },
            categoriesFetching: (state) =>{
                state.loading = true
            },
            categoryError: (state, action) =>{
                state.error = action.payload;
                state.loading = false
            },
            updateCategory: (state, action) =>{
                state.categories = state.categories.map(category => category.id === action.payload.id ? action.payload : category);
                state.loading = false
            },
            deleteCategory: (state, action)=>{
                state.categories = state.categories.filter(category=>category.id !== action.payload)                
            },
            getCategory: (state,action) => {
                state.category = action.payload
            }
        }
})

export const { getCategories, addCategory, updateCategory, deleteCategory, categoriesFetching, categoryError, getCategory} = categoriesReducer.actions;

export const getCategoriesApi =  () => async dispatch => {
        dispatch(categoriesFetching())
    try {
        const request = await fetch('http://ongapi.alkemy.org/api/categories');
        const resultado = await request.json();
            console.log(resultado.data)
        dispatch(getCategories(resultado.data))
        
    } catch (error) {
        dispatch(categoryError(error.message));
    }

};

export const addCategoryApi = category => async dispatch => {
    dispatch(categoriesFetching())
    try {               
        const respuesta = await fetch('http://ongapi.alkemy.org/api/categories', {
            method: 'POST', 
            body: JSON.stringify(category), 
            headers:{
              'Content-Type': 'application/json'
            }})
        const resultado = await respuesta.json();
                
        dispatch(addCategory(resultado.data))

     } catch (error) {
        dispatch(categoryError(error.message));
    }
 }

 

 export const updateCategoryApi = category => async dispatch => {
    
    dispatch(categoriesFetching())
   try {
       
       const response = await fetch(`http://ongapi.alkemy.org/api/categories/${category.id}`, {
           method: 'PUT',
           body: JSON.stringify(category), 
           headers:{
             'Content-Type': 'application/json'
           }})
        const resultado = await response.json()

        dispatch(updateCategory(resultado.data))

   } catch (error) {
    dispatch(categoryError(error.message));
}
}

export const deleteCategoryApi = id => async dispatch =>{
    
    try {
        await fetch(`http://ongapi.alkemy.org/api/categories/${id}`, {
            method: 'DELETE',
            })
                                           
        dispatch(deleteCategory(id))

    } catch (error) {
    dispatch(categoryError(error.message));
}
}   



export const getCategoryApi = id => async dispatch => {
    try {
        console.log(id)
        const request = await fetch(`http://ongapi.alkemy.org/api/categories/${id}`);
        const response = await request.json();
            console.log("response data",response.data)
            console.log(getCategory(response.data))

        dispatch(getCategory(response.data))
        
        
    } catch (error) {
        dispatch(categoryError(error.message));
    }
}

export default categoriesReducer.reducer;

