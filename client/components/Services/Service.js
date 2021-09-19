import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Service.styles.css';
import * as mui from '../mui-elements';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';


const { ServiceElement } = mui;

const mapStateToProps = state => ({
  namespace: state.namespaces.currentNamespace
})

const mapDispatchToProps = dispatch => ({
  loadServices: async (namespace) => {
    let services = await actions.fetchCustomServices(namespace);
    dispatch(actions.getServices(services))
  }
})

const Service = (props) => {

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



  return (
    <div className='podContainer'>
      <ServiceElement>
        <CardContent>
          <div>
            <p className='podLabel'>{props.service.name}</p>
            <center><Button color='secondary' variant='contained' size='small'>MORE INFO</Button></center>
          </div>
        </CardContent>
      </ServiceElement>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);

