import React from 'react';

const userOutput = (props) => {

  return (
    <div>
      <p> This page was made by {props.name} </p>
      <p onClick = {props.clickHere} > But there is always room to learn at {props.age} </p>
    </div>
  )
}


export default userOutput;
