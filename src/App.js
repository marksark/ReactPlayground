import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {id:'1kd', name: 'Mark', age:25},
      {id:'2skd', name: 'Alex', age:24},
      {id:'3fdd', name: 'Daniel', age:30}
    ],
    showPersons: true
  }

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

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({
    showPersons: !doesShow
  });
}

  render() {
// everything under render re-renders everytime the state is changed
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
          return <Person
          click = {() => this.deletePersonHandler(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>
    )}

    return (
      <div className="App">
        <h1> Improving Knowledge about State/less components </h1>
        <p> Click on the first line of each to delete the person </p>
        {persons}
        <button style = {style}
            onClick={this.togglePersonsHandler}>
            Toggle All Persons
            </button>
      </div>
    );
  }
}

export default App;
