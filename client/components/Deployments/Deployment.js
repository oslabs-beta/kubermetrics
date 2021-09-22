/**
 * ************************************
 *
 * @module  Deployment.js
 * @author team Kubermetrics
 * @date
 * @description React Component for Deployments 
 *
 * ************************************
 */
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Deployment.style.css';
import * as mui from '../mui-elements'
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import DeploymentDialog from '../../Dialog/DeploymentDialog';

// Map dispatch to props to allow ability to refresh Deployments list from within component.

const mapDispatchToProps = dispatch => ({
  loadDeployments: async (namespace) => {
    // fetch deployments & format data with current namespace.
    let deployments = await actions.fetchCustomDeployments(namespace);
    // send array of deployments to reducer.
    dispatch(actions.getDeployments(deployments))
  }
})

// Map state to props so we know the currently selected namespace. 

const mapStateToProps = state => ({
  namespace: state.namespaces.currentNamespace
})




const Deployment = (props) => {
  
  // Deconstruct deployment element from mui file 

  const { DeploymentElement } = mui;

  // Conditional render accounting for the case in which no running deployments are found. 

  if (props.notLoaded) {
    return (
      <div className='podContainer'>
      <DeploymentElement>
        <CardContent>
          <div>
              <p className='podLabel'>No Deployments found</p>
              <center><Button color='secondary' variant='contained' size='small' onClick={() => props.loadDeployments(props.namespace)}>Refresh</Button></center>
            </div>
        </CardContent>
      </DeploymentElement>
     </div>
    )
  }

  // Default Render displaying Deploment name & deployment dialog to handle extra data.

  return (
    <div className='podContainer'>
      <DeploymentElement>
        <CardContent>
          <div>
              <p className='podLabel'>{props.deployment.name}</p>
              <center><DeploymentDialog deployment={props.deployment}></DeploymentDialog></center>
          </div>
      </CardContent>
    </DeploymentElement>
  </div>
  )
}

// Export component as well as connect it to Redux Reducers & State

export default connect(mapStateToProps, mapDispatchToProps)(Deployment);
