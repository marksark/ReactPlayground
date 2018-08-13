import React from 'react';
import './Person.css';

const person = (props) => {

  //can write some code over here
  return (
    <div className="Person">
      <p onClick={props.click} > I am {props.name} and I am {props.age} years old </p>
      <p> {props.children} </p>
        {console.log('props', props)}
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>

  )
}

export default person;
