/**
 * ************************************
 *
 * @module  PodsList.js
 * @author team Kubermetrics
 * @date
 * @description React Component that will contain all Pod Elements
 *
 * ************************************
 */
import React from 'react';
import { connect } from 'react-redux';
import Pod from './Pod';
import './PodsList.style.css'


 // Map pods array to state 

const mapStateToProps = state => ({
  pods: state.pods.pods
})


export const PodList = (props) => {

  // array to hold all react elements to be rendered 
  const podsArray = [];
  // running will count all pods that include "running" or "succeeded" in phase 
  let running = 0
  // total will count total amount of pods. 
  let total = 0;
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

      if (pod.allData){
        if (pod.allData.status.phase === 'Running' || pod.allData.status.phase === 'Succeeded') running++;
      }
      total++;
  });

  // Conditional render accounting for the case in which no pods are found

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

// default render statement

  return (
    <div className='podsList'>
      <div className='miniHeadList'>
        <h4 className='miniHeadText'> Pods </h4>
        <h4 className='greenText'> Running: {running} / {total} </h4>
      </div>
      <div className='overflowBox'>
       {podsArray}
      </div>
    </div>
    )
}

export default connect(mapStateToProps, null)(PodList)