import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';
/*import { Button } from 'react-bootstrap';
import {MDBBtn,MDBContainer, MDBInputGroup } from "mdbreact";
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'*/

function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmi(e) {
    if(person !== '') {
      props.addPerson(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <div>
    {/*<div ><h1>To Do List</h1></div>*/}
    <form >
      <input type="text" 
        placeholder="Add task ..." 
        onChange={handleChange} 
        value={person} />
        
      <button onClick={handleSubmi} type="submit">+</button>
  
      
   </form>
   </div>
  );
}

const mapDipatchToProps = {
  addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm)