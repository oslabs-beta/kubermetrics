import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import './Pod.style.css';
import * as mui from '../mui-elements'

const { PodElement } = mui;

const Pod = (props) => {
  return (
    <div className='podContainer'>
      <PodElement>
        <CardContent>
          <div>
              <p className='podLabel'>{props.label}</p>
              <p>{props.apiVersion}</p>
              <p>{props.nodeName}</p>
              <p>{props.podName}</p>
              <p>{props.namespace}</p>
              <p>{props.uid}</p>
              <p>{props.created}</p>
              <p>{props.containers}</p>
              <p>{props.serviceAccount}</p>
              <p>{props.serviceAccountName}</p>
              <p>{props.hostIP}</p>
              <p>{props.podIP}</p>
              <p>{props.phase}</p>
            
          </div>
      </CardContent>
    </PodElement>
  </div>
  )
}



export default Pod;



/* code to save
const Pod = (props) => {
  return (
    <PodElement className='podContainer'>
      <CardContent>
        <div>
          <ul>
            <p>{props.apiVersion}</p>
            <p>{props.nodeName}</p>
            <p>{props.podName}</p>
            <p>{props.namespace}</p>
            <p>{props.uid}</p>
            <p>{props.created}</p>
            <p>{props.containers}</p>
            <p>{props.serviceAccount}</p>
            <p>{props.serviceAccountName}</p>
            <p>{props.hostIP}</p>
            <p>{props.podIP}</p>
            <p>{props.phase}</p>
          </ul>
        </div>
    </CardContent>
  </PodElement>
  )
}
*/