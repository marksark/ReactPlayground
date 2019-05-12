import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import classes from './App.css';

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
    let btnClass = null;
    let persons = null;

    //how to show all persons without calling individually
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary   key = {person.id}> <Person
            click = {() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            changed = {(event) => this.nameChangedHandler(event, person.id)}
            />< /ErrorBoundary>
          })}
        </div>
    );
    btnClass=classes.Red
  }

    const assignedClasses =[];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      //try to keep components under this minimal
      <div className={classes.App}>
        <h1> Improving Knowledge about State/less components </h1>
        <p className={assignedClasses.join(' ')}> Click on the first line of each to delete the person </p>
        {persons}
        <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>
      </div>
    );
  }
}

export default App;
