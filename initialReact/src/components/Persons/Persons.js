import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render(){
    return this.props.persons.map((person, index) => {
        return <Person
        click = {() => this.props.clicked(index)}
        key = {person.id}
        name = {person.name}
        age = {person.age}
        changed = {(event) => this.props.changed(event, person.id)}
        />
      } );
  }
}
export default Persons;
