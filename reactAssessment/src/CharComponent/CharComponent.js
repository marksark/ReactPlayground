import React from 'react';
import './charComp.css';

const charComponent = (props) => {
  return (
    <div className="charComp" onClick={props.remove}>
      {props.character}
    </div>
  )
}


export default charComponent;
