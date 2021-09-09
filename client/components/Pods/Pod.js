import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import './Pod.style.css';
import * as mui from '../mui-elements'

const { PodElement } = mui;

const Pod = (props) => {
  return (
    <PodElement className='podContainer'>
      <CardContent>
        <div>
          <ul>
            <li>{props.apiVersion}</li>
            <li>{props.nodeName}</li>
            <li>{props.podName}</li>
            <li>{props.namespace}</li>
            <li>{props.uid}</li>
            <li>{props.created}</li>
            <li>{props.containers}</li>
            <li>{props.serviceAccount}</li>
            <li>{props.serviceAccountName}</li>
            <li>{props.hostIP}</li>
            <li>{props.podIP}</li>
            <li>{props.phase}</li>
          </ul>
        </div>
    </CardContent>
  </PodElement>
  )
}



export default Pod;