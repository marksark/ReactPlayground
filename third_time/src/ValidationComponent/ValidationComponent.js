import React from 'react';

const validationComp = (props) => {
  return(
    <div>
      <p>
        {props.numCount}
      </p>
      <div>
        {  props.numCount < 5 ?
          <p> Text Too Short </p> :
          <p> Text Is Good!  </p> 
        }
      </div>
    </div>

  )
}

export default validationComp;
