import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  state = {
    persons : [
      {id:'1kd', name: 'Mark', age:25},
      {id:'2skd', name: 'Alex', age:24},
      {id:'3fdd', name: 'Daniel', age:30}
    ],
    showPersons: true
  }

  //change name of person whose input box is engaged
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    };
    person.name  = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

//toggle showing and hiding list of people
togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({
    showPersons: !doesShow
  });
}

// everything under render re-renders everytime the state is changed
  render() {
    let persons = null;

    //how to show all persons without calling individually
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
        </div>
    );
  }

    return (
      //try to keep components under this minimal
      <Aux>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
