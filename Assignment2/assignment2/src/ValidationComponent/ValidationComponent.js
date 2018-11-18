import React from 'react';

const validationComponent = (props) => {

  // aside from ternary expression, below works
  // let mark = '';
  // if (props.value < 5) {
  //   mark = "The input is too short"
  // } else {
  //   mark = "Great it's long enough!"
  // }

  return (
    <div className="validationComponent">
      <p>
        {props.value}
      </p>
      {
        props.value < 5 ?
          <p>The input is too short </p> :
          <p>The input is long enough! </p>
      }

    </div>
  )
}

export default validationComponent;
