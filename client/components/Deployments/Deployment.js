import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Deployment.style.css';
import * as mui from '../mui-elements'
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
  loadDeployments: async () => {
    let deployments = await actions.fetchDeployments();
    dispatch(actions.getDeployments(deployments))
  }
})



const { DeploymentElement } = mui;

const Deployment = (props) => {


  if (props.notLoaded) {
    return (
      <div className='podContainer'>
      <DeploymentElement>
        <CardContent>
          <div>
              <p className='podLabel'>No Deployments found</p>
              <center><Button color='secondary' variant='contained' size='small' onClick={props.loadDeployments}>Refresh</Button></center>
          </div>
      </CardContent>
    </DeploymentElement>
  </div>
    )
  }



  return (
    <div className='podContainer'>
      <DeploymentElement>
        <CardContent>
          <div>
              <p className='podLabel'>{props.deployment.name}</p>
              <center><Button color='secondary' variant='contained' size='small'>MORE INFO</Button></center>
            
          </div>
      </CardContent>
    </DeploymentElement>
  </div>
  )
}



export default connect(null, mapDispatchToProps)(Deployment);
