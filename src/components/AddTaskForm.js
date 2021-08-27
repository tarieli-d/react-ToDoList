import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
/*import { Button } from 'react-bootstrap';
import {MDBBtn,MDBContainer, MDBInputGroup } from "mdbreact";
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'*/

const AddTaskForm=(props) =>{
  const [task, setTask] = useState('');

  const handleChange=(e)=> {
    setTask(e.target.value);
  }
    
  const handleSubmit=(e)=> {
    if(task !== '') {
      props.addTask(task);
      setTask('');
    }
    e.preventDefault();
  }
  return (
    <div>
    <h2 style={{color:'black',textAlign:'center',fontFamily:'Courier'}}>To Do List</h2>
    <form >
      <input type="text" 
        placeholder="Add a task" 
        onChange={handleChange} 
        value={task} /> 
      <button onClick={handleSubmit} type="submit">+</button>    
   </form>
   </div>
  );
}

const mapDipatchToProps = {
  addTask
}

export default connect(null, mapDipatchToProps)(AddTaskForm)