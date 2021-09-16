import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Deployment from './Deployment';
import './DeploymentList.style.css'



const mapStateToProps = state => ({
  deployments: state.deployments.deployments
})


const DeploymentList = (props) => {
  const deploymentsArray = [];
  console.log(props.deployments)
  
  props.deployments.forEach((deployment, ind) => {
    deploymentsArray.push(<Deployment
      key={ind}
      deployment={{...deployment}}
      />)
  })


  return (

      <div className='deploymentList'>
        <div className='miniHeadList'>
          <h4 className='miniHeadText'> Deployments </h4>
          <h4 className='greenText'> Running: {deploymentsArray.length} </h4>
        </div>
        <div className='overflowBox'>
        {deploymentsArray}
        </div>
      </div>
    )
}

export default connect(mapStateToProps, null)(DeploymentList)