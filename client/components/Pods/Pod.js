import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Button from '@material-ui/core/Button';
import './Pod.style.css';
import * as mui from '../mui-elements'
import CustomizedDialogs from '../../Dialog/PodsDialog';


const { PodElement } = mui;


const mapDispatchToProps = dispatch => ({
  loadPods: async (namespace) => {
    let pods = await actions.fetchCustomPods(namespace);
    dispatch(actions.getPods(pods));
  }
})

const mapStateToProps = state => ({ 
  namespace: state.namespaces.currentNamespace
})

const Pod = (props) => {


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


  return (
    <div className='podContainer'>
      <PodElement>
        <CardContent>
          <div>
              <p className='podLabel'>{props.label}</p>
              <p className='podLabel'>{props.podName}</p>
              <center><CustomizedDialogs pod={props.pod}/></center>
          </div>
      </CardContent>
    </PodElement>
  </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(Pod);
