import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactReducer from './components/contact/contactReducer';

// Create reducers
const rootReducer = combineReducers({
contactReducer: contactReducer,
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
