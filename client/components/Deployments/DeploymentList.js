import React from 'react';
import { connect } from 'react-redux';
import Deployment from './Deployment';
import './DeploymentList.style.css'



const mapStateToProps = state => ({
  deployments: state.deployments.deployments
})


const DeploymentList = (props) => {

  const deploymentsArray = [];
  let replicas = 0;
 
  
  props.deployments.forEach((deployment, ind) => {
    deploymentsArray.push(<Deployment
      key={ind}
      deployment={{...deployment}}
      />)
      replicas += deployment.replicas;
  })

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