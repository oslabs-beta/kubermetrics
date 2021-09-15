import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import './Deployment.style.css';
import * as mui from '../mui-elements'


const { DeploymentElement } = mui;

const Deployment = (props) => {
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



export default Deployment;
