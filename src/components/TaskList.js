import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteTask } from '../actions';
import '../style.css';

const TaskList = props => {
  const [isFadingOut, setIsFadingOut] = useState(-1);
  /**animate deleted task */
  const deleteTask = index => {
    /**set index of task,which  is deleted,we need that index to apply fadeout animation css only to the item,which is deleted */
    setIsFadingOut(index);
    /**stop animation after 300ml*/
    const t = setTimeout(() => {
      props.deleteTask(index);
      setIsFadingOut(-1);
    }, 300);
    return () => clearTimeout(t);
  };
  const arr = props.tasks;
  const listItems = arr.map((val, index) => {
    return (
      <li
        className={isFadingOut === index ? 'task-fadeout' : 'task'}
        key={index}
      >
        {val}
        <span onClick={() => deleteTask(index)}>
          <FaTrashAlt />
        </span>
      </li>
    );
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};
const mapDipatchToProps = {
  deleteTask
};
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(TaskList);
