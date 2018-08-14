import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name: 'Mark', age:25},
      {name: 'Alex', age:24},
      {name: 'Daniel', age:30}
    ],
    showPersons: true
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Mark', age:25},
        {name: 'Alex', age:24},
        {name: event.target.value, age:30}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
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
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}/>
        })}
      </div>
    )}

    return (
      <div className="App">
        <h1> Figuring out State and Stateless components </h1>
        <p> Click on a the first line of each to delete the person </p>
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
