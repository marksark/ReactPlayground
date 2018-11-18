import React from 'react';
import './UserInput.css';

const userInput = (props) => {

  return (
    <div className = 'UserInput'>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default userInput;
