import React from 'react';
import { connect } from 'react-redux';
import '../style.css';
import { deletePerson } from '../actions';

function PeopleList(props) {
  function DeleteList(e) {
    props.deletePerson(e);
  }
  const arr = props.contacts;
  const listItems = arr.map((val, index) => (
    <li key={index}>
      <i>{val}</i>
      <span onClick={() => DeleteList(index)} key={index}>
        <i>&#10006;</i>
      </span>
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}
const mapDipatchToProps = {
  deletePerson
};
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(PeopleList);
