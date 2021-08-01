import { createSlice } from '@reduxjs/toolkit';

export const activitiesReducer = createSlice ({
    name: 'activities',
        initialState: {
            activities: [],
            activity: null,
            loading:null,
            error:null  
        },

        reducers:{
            getActivities: (state, action) =>{
                state.activities = action.payload;
                state.loading = false
            },
            addActivity: (state, action) =>{
                state.activities.push(action.payload);
                state.loading = false                                
            },
            fetchActivities: (state) =>{
                state.loading = true
            },
            activityError: (state, action) =>{
                state.error = action.payload;
                state.loading = false
            },
            updateActivity: (state, action) =>{
                console.log('ACTION');
                console.log(action.payload);
                state.activities = state.activities.map(activity => activity.id === action.payload.id ? action.payload : activity);
                state.loading = false
            },
            currentActivity: (state, action) =>{
                state.activity = action.payload
            },
            deleteActivity: (state, action)=>{
                
                state.activities = state.activities.filter(activity=>activity.id !== action.payload)                
            }
        }
})

export const { getActivities, addActivity, updateActivity, deleteActivity, currentActivity, fetchActivities, activityError } = activitiesReducer.actions;

export const apiGetActivities =  () => async dispatch => {
    dispatch(fetchActivities())
    try {
        fetch('http://ongapi.alkemy.org/api/activities')
        .then((data) => data.json())
        .then(data => {
            const activities = data.data;
            dispatch(getActivities(activities))
        })
        
    } catch (error) {
        dispatch(activityError(error.message));
    }

};

export const apiAddActivity = activity => async dispatch => {
    dispatch(fetchActivities())
    try {               
        const res = await fetch('http://ongapi.alkemy.org/api/activities', {
            method: 'POST', 
            body: JSON.stringify(activity), 
            headers:{
              'Content-Type': 'application/json'
            }})
        await res.json();

        console.log('Actividad Creada');
                
        dispatch(addActivity(activity))

     } catch (error) {
        dispatch(activityError(error.message));
    }
 }


 export const apiUpdateActivity = activity => async dispatch => {
    
    dispatch(fetchActivities())
   try {
       
       const result = await fetch(`http://ongapi.alkemy.org/api/activities/${activity.id}`, {
            method: 'PUT',
            body: JSON.stringify(activity), 
            headers:{
                'Content-Type': 'application/json'
           }})

        console.log('Actividad Actualizada');
        
        dispatch(updateActivity(result.data))

   } catch (error) {
    dispatch(activityError(error.message));
    console.log(error)
}
}

export const getCurrentActivity = activity => dispatch => {
    console.log(activity);
    dispatch(currentActivity(activity))
}

export const apiDeleteActivity = id => async dispatch =>{
    
    try {
        fetch(`http://ongapi.alkemy.org/api/activities/${id}`, {
            method: 'DELETE',
        })
        .then(() => console.log('Actividad Eliminada'))
                                           
        dispatch(deleteActivity(id))

    } catch (error) {
    dispatch(activityError(error.message));
}
}   
export default activitiesReducer.reducer;

