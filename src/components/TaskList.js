import React from 'react';
import { connect } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";
import { deleteTask } from '../actions';
import '../style.css';

const PeopleList=(props)=>{
  const DeleteTask=(e)=> {
    props.deleteTask(e);
  }
  const arr = props.tasks;
  const listItems = arr.map((val, index) => (
    <li key={index}>
      {val}
      <span onClick={() => DeleteTask(index)} key={index}>
      <FaTrashAlt/>
      </span>
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    tasks: state.tasks
  };
}
const mapDipatchToProps = {
  deleteTask
};
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(TaskList);
