import { createSlice } from '@reduxjs/toolkit';
const url = 'http://ongapi.alkemy.org/api/organization'

export const organizationReducer = createSlice({
  name: 'organization',
  initialState: {
    loading: false,
    error: null,
    organizationData: []
  },
  reducers: {
    organizationStartFetching: (state) => {
      state.loading = true
    },
    getOrganizationData: ((state, action) => {
      state.loading = false
      state.organizationData = action.payload
    }),
    organizationError: ((state, action) => {
      state.loading = false
      state.error = action.payload
    }),
    updateOrganizationData: (state, organizationDataUpdated) => {
      state.organization = organizationDataUpdated;
      state.loading = false
    }
  }
})

export const { organizationStartFetching, getOrganizationData, organizationError, updateOrganizationData } = organizationReducer.actions

export const getOrganizationApiData = () => async dispatch => {
  dispatch(organizationStartFetching())
  try {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json();
    dispatch(getOrganizationData(resultado.data[0]))
  } catch (error) {
    dispatch(organizationError(error.message))
  }
}

export const updateOrganizationApiData = organizationValues => async dispatch => {
  // console.log("Reducer stored inputs");
  // console.log(organizationValues)
  dispatch(organizationStartFetching())
  
  try {
    const resultado = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(organizationValues),
      headers: {
        'Content-Type': 'application/json'
      }})

      const result = await resultado.json()
      console.log("Reducer updated values")
      console.log(result)
    dispatch(updateOrganizationData(result))
  } catch (error) {
    dispatch(organizationError(error.message));
  }
}

export default organizationReducer.reducer