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
  props.pods.forEach((pod, ind) => {
    podsArray.push(<Pod
      key={ind}
      apiVersion={pod.apiVersion}
      nodeName={pod.nodeName}
      label={pod.label}
      podName={pod.podName}
      namespace={pod.namespace}
      uid={pod.uid}
      created={pod.created}
      containers={pod.containers}
      serviceAccount={pod.serviceAccount}
      serviceAccountName={pod.serviceAccountName}
      hostIP={pod.hostIP}
      podIP={pod.podIP}
      phase={pod.phase}
      />)
  })

  return (
    <div className='podsList'>
    {podsArray}
    </div>
    )
}

export default connect(mapStateToProps, null)(PodList)