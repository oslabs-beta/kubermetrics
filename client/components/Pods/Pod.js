/**
 * ************************************
 *
 * @module  Pod.js
 * @author team Kubermetrics
 * @date
 * @description React Component for Pods
 *
 * ************************************
 */
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Button from '@material-ui/core/Button';
import './Pod.style.css';
import * as mui from '../mui-elements'
import PodDialog from '../../Dialog/PodsDialog';

// Deconstruct our Custom Pod element from our mui file

const { PodElement } = mui;

// Attach ability to reload pods to each pod component

const mapDispatchToProps = dispatch => ({
  loadPods: async (namespace) => {
    let pods = await actions.fetchCustomPods(namespace);
    dispatch(actions.getPods(pods));
  }
})

// Map current namespace to props

const mapStateToProps = state => ({ 
  namespace: state.namespaces.currentNamespace
})

const Pod = (props) => {

// Conditional statement checking if props.notLoaded = true (passed down from pod list)
  if (props.notLoaded) {
    return (
      <div className='podContainer'>
        <PodElement>
          <CardContent>
            <div>
              <p className='podLabel'>No Pods Found</p>
              <center><Button color='secondary' variant='contained' size='small' onClick={() => props.loadPods(props.namespace)}>Refresh</Button></center>   
              
           </div>
         </CardContent>
       </PodElement>
      </div>
    )
  }

  // Default render for Pod element. 
  
  return (
    <div className='podContainer'>
      <PodElement>
        <CardContent>
          <div>
              <p className='podLabel'>{props.label}</p>
              <p className='podLabel'>{props.podName}</p>
              <center><PodDialog pod={props.pod}/></center>
          </div>
      </CardContent>
    </PodElement>
  </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(Pod);
