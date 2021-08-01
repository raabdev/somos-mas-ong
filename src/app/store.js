import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import reducerHome from 'reducers/homeReducer';
import counterReducer from '../features/counter/counterSlice';
import  authReducer from '../reducers/authReducer';
import testimoniosReducer  from '../reducers/testimonialsReducer';
import membersReducer from '../reducers/membersReducer'
import activitiesReducer  from '../reducers/activitiesReducer';
import categoriesReducer  from '../reducers/categoriesReducer';
import organizationReducer  from '../reducers/organizationReducer';
import newsReducer from '../reducers/newsReducer'

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  testimonios: testimoniosReducer,
  reducerHome,
  members: membersReducer,
  activities: activitiesReducer,
  categories: categoriesReducer,
  organization: organizationReducer,
  newsReducer,
});
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//     auth: authReducer,
//     testimonios: testimoniosReducer,
//     reducerHome,
//     members: membersReducer,
//     activities: activitiesReducer,
//     categories: categoriesReducer,
//     organization: organizationReducer,
//     newsReducer,
//   },
// });
export default store;