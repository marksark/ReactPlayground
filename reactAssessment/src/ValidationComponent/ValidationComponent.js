import React from 'react';

const validationComponent = (props) => {
  return (
    <div>
    <p> {props.numb} </p>
      {
        props.numb < 5 ?
    <p>The input is too short! </p>:
    <p>The input is long enough</p>
      }
    </div>
  )
};

export default validationComponent;
