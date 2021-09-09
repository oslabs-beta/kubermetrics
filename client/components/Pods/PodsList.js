import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Pod from './Pod';
import './PodstList.style.css'


const mapStateToProps = state => ({
  pods: state.pods.pods
})


export const PodList = (props) => {
  const podsArray = [];
  props.pods.forEach((pod) => {
    podsArray.push(<Pod
      key={pod.uid}
      nodeName={pod.nodeName}
      podName={pod.podName}
      podLabel={pod.label}
      />)
  })

  return (
    <div className='podsList'>
    {podsArray}
    </div>
    )
}

export default connect(mapStateToProps, null)(PodList)