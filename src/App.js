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
  nameHandler = (newName) => {
    this.setState({
      persons : [
        {name: 'Mark', age:25},
        {name: 'Alex', age:24},
        {name: newName, age:30}
      ]
    })
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
        <div className="persons">
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name}
          click={this.nameHandler.bind(this, 'NewOnesss')}
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}
          >My brother: Brian</Person>
      </div>
      );
    }

    return (
      <div className="App">
        <h1> Figuring out State and Stateless components </h1>
        <p> JSX code goes inside of this section </p>
        {persons}
        <button style = {style}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
            </button>
      </div>
    );
  }
}

export default App;
