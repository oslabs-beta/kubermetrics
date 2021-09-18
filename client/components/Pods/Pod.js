import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Button from '@material-ui/core/Button';
import './Pod.style.css';
import * as mui from '../mui-elements'


const { PodElement } = mui;


const mapDispatchToProps = dispatch => ({
  loadPods: async () => {
    let pods = await actions.fetchPods();
    dispatch(actions.getPods(pods));
  }
})

const Pod = (props) => {


  if (props.notLoaded) {
    return (
      <div className='podContainer'>
        <PodElement>
          <CardContent>
            <div>
              <p className='podLabel'>No Pods Found</p>
              <center><Button color='secondary' variant='contained' size='small' onClick={props.loadPods}>Refresh</Button></center>   
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
              <center><Button color='secondary' variant='contained' size='small'>MORE INFO</Button></center>   
          </div>
      </CardContent>
    </PodElement>
  </div>
  )
}



export default connect(null, mapDispatchToProps)(Pod);
