import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTaskForm = props => {
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    if (task !== '') {
      props.addTask(task);
      setTask('');
    }
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add a task"
          onChange={handleChange}
          value={task}
        />
        <button onClick={handleSubmit} type="submit">
          +
        </button>
      </form>
    </div>
  );
};

const mapDipatchToProps = {
  addTask
};

export default connect(
  null,
  mapDipatchToProps
)(AddTaskForm);
