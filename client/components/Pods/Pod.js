import React from 'react';
import Card from '@material-ui/core/Card';
import './Pod.style.css';





const Pod = (props) => {
  return (
    <Card className='podContainer'>
    <div>
      <ul>
        <li>{props.nodeName}</li>
        <li>{props.podLabel}</li>
        <li>{props.podName}</li>
      </ul>
    </div>
    </Card>
  )
}



export default Pod;