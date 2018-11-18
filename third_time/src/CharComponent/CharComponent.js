import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return(
    <div className="charComp" onClick={props.log}>
      {props.char}
    </div>
  )
}

export default charComponent;
