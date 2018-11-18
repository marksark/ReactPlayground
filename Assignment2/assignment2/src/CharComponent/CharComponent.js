import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return (
    <p className='charComponent' onClick={props.remove}>
      {props.character}
    </p>
  )
}

export default charComponent;
