import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style.css';

const initialState = {
  contacts: ["Go for shopping", "Cook meal", "Fix computer"] 
  };

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state,
        contacts: [...state.contacts, action.data]}

    case 'DELETE_PERSON':
      const new_arr=[...state.contacts];
      new_arr.splice(action.data,1);
      return {...state,
        contacts: [...new_arr]}
    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
   
  </Provider>,
  document.getElementById('root')
);