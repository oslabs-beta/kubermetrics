import React from 'react';
import { connect } from 'react-redux';
import Pod from './Pod';
import './PodsList.style.css'



const mapStateToProps = state => ({
  pods: state.pods.pods
})


export const PodList = (props) => {
  const podsArray = [];
  props.pods.forEach((pod, ind) => {
    podsArray.push(<Pod
      key={ind}
      pod={pod}
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
  });

  if (!podsArray.length){
    return (
      <div className='podsList'>
        <div className='miniHeadList'>
          <h4 className='miniHeadText'> Pods </h4>
          <h4 className='redText'> None Found In Current Namespace </h4>
        </div>
        <div className='overflowBox'>
        <Pod  notLoaded={true}  />
        </div>
      </div>
    )
  }

  return (
    <div className='podsList'>
      <div className='miniHeadList'>
        <h4 className='miniHeadText'> Pods </h4>
        <h4 className='greenText'> Running: {podsArray.length} </h4>
      </div>
      <div className='overflowBox'>
       {podsArray}
      </div>
    </div>
    )
}

export default connect(mapStateToProps, null)(PodList)