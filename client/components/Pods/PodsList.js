import React from 'react';
import ReactDOM from 'react-dom';


export const PodList = (props) => {
  const podsArray = [];
  props.pods.forEach((pod, ind) => {
    podsArray.push(<Pod
      key={ind}
      name={pod.metadata.namespace}
      />)
  })
  return (
    <div>
    {podsArray}
    </div>
  )
}