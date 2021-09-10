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
              <p><b>API Version:</b> {props.apiVersion}</p>
              <p><b>Node Name:</b> {props.nodeName}</p>
              <p><b>Pod Name:</b> {props.podName}</p>
              <p><b>Namespace:</b> {props.namespace}</p>
              <p><b>UID:</b> {props.uid}</p>
              <p><b>Created:</b> {props.created}</p>
              <p><b>Containers:</b> {props.containers}</p>
              <p><b>Service Account:</b> {props.serviceAccount}</p>
              <p><b>Service Account Name:</b> {props.serviceAccountName}</p>
              <p><b>Host IP:</b> {props.hostIP}</p>
              <p><b>Pod IP:</b> {props.podIP}</p>
              <p><b>Phase:</b> {props.phase}</p>
            
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