/**
 * ************************************
 *
 * @module  Service.js
 * @author team Kubermetrics
 * @date
 * @description React Component for Services
 *
 * ************************************
 */
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Service.styles.css';
import * as mui from '../mui-elements';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import ServiceDialog from '../../Dialog/ServiceDialog';

// Deconstruct custom service element imported from mui file
const { ServiceElement } = mui;

// Map current namespace to props 
const mapStateToProps = state => ({
  namespace: state.namespaces.currentNamespace
})

// Map ability to refresh pods to props
const mapDispatchToProps = dispatch => ({
  loadServices: async (namespace) => {
    let services = await actions.fetchCustomServices(namespace);
    dispatch(actions.getServices(services))
  }
})


const Service = (props) => {

  // Conditional statement accounting for if services are not loaded (passed down from Service List)
  if (props.notLoaded) {
    return (
      <div className='podContainer'>
      <ServiceElement>
        <CardContent>
          <div>
            <p className='podLabel'>No Services Found</p>
            <center><Button color='secondary' variant='contained' size='small' onClick={() => props.loadServices(props.namespace)}>Refresh</Button></center>
          </div>
        </CardContent>
      </ServiceElement>
    </div>
    )
  }


// Default Render
  return (
    <div className='podContainer'>
      <ServiceElement>
        <CardContent>
          <div>
            <p className='podLabel'>{props.service.name}</p>
            <center><ServiceDialog service={props.service}>MORE INFO</ServiceDialog></center>
          </div>
        </CardContent>
      </ServiceElement>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);

