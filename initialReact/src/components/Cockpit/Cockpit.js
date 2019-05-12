import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

      let btnClass = classes.Button;
      if(props.showPersons){
        btnClass=[classes.Button, classes.Red].join(' ');
      }

      const assignedClasses =[];
      if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
      }
      if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
      }

  return(
    <Aux>
      <h1> Improving Knowledge about State/less components </h1>
      <p className={assignedClasses.join(' ')}> Click on the first line of each to delete the person </p>
      <button
          className={btnClass}
          onClick={props.clicked}>
          Toggle Persons
      </button>
      <br/>
      <br/>
    </Aux>
  );
}

export default cockpit;
