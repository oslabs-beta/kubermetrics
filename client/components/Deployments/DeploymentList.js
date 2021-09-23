/**
 * ************************************
 *
 * @module  DeploymentList.js
 * @author team Kubermetrics
 * @date
 * @description React Component that will contain all Deployments
 *
 * ************************************
 */
import React from 'react';
import { connect } from 'react-redux';
import Deployment from './Deployment';
import './DeploymentList.style.css'


// Map deployment array to props 

const mapStateToProps = state => ({
  deployments: state.deployments.deployments
})


const DeploymentList = (props) => {

  // Array that will contain all Deployment react components
  const deploymentsArray = [];

  // Replicas will count each deployments replicas and dispay for end user 
  let replicas = 0;
 
  // Iterate over array and create react element for each deployment
  props.deployments.forEach((deployment, ind) => {
    deploymentsArray.push(<Deployment
      key={ind}
      deployment={{...deployment}}
      />)
      // Add up replicas
      replicas += deployment.replicas;
  })

  // Conditional Render to handle case in which no running deployments are found. 

  if (!deploymentsArray.length){
    return (
      <div className='deploymentList'>
      <div className='miniHeadList'>
        <h4 className='miniHeadText'> Deployments </h4>
        <h4 className='redText'> None Found in Current Namespace </h4>
      </div>
      <div className='overflowBox'>
      <Deployment notLoaded={true} /> 
      </div>
    </div>
    )
  }

  // Default Render to return Deployment container with all deployment elements

  return (

      <div className='deploymentList'>
        <div className='miniHeadList'>
          <h4 className='miniHeadText'> Deployments </h4>
          <h4 className='greenText'> Total Replicas: {replicas} </h4>
        </div>
        <div className='overflowBox'>
        {deploymentsArray}
        </div>
      </div>
    )
}

export default connect(mapStateToProps, null)(DeploymentList)