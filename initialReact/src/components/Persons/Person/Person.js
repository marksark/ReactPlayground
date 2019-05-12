import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component{
  render() {
    return (
      <Aux>
      <p onClick={this.props.click} > I am {this.props.name} and I am {this.props.age} years old </p>
      <p> {this.props.children} </p>
      <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
  }
}

export default withClass(Person, classes.Person);
