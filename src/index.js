import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';

const initialState = {
  tasks: ['Go shopping', 'Cook a meal', 'Fix computer']
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.data] };

    case 'DELETE_TASK':
      const new_arr = [...state.tasks];
      new_arr.splice(action.data, 1);
      return { ...state, tasks: [...new_arr] };
    default:
      return state;
  }
};

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddTaskForm />
    <TaskList />
  </Provider>,
  document.getElementById('root')
);
