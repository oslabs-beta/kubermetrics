import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import PodsList from '../../components/Pods/PodsList';
// import Navbar from '../../components/navbar/navbar'
// import NavBar from '../../components/navbar/index.js'
import * as actions from '../../actions/actions';


const mapStateToProps = state => ({
  pods: state.pods.pods
})

const mapDispatchToProps = dispatch => ({
  click: async () => {
    let pods = await actions.fetchPods()
    dispatch(actions.getPods(pods))
  },
  click4: async () => {
    const ingresses = await actions.fetchIngress()
    dispatch(actions.getIngress(ingresses))
  },
  click2: async () => {
    let nodes = await actions.fetchNodes();
    dispatch(actions.getNodes(nodes))
  },
  click3: async () => {
    let deployments = await actions.fetchDeployments();
    dispatch(actions.getDeployments(deployments));
  }
})


const HomePage = (props) => {
  return (
    <div className='homePage'>
      {/* <Navbar></Navbar> */}
      {/* <NavBar /> */}
      <PodsList state={props.state}/>
      <button onClick={props.click}></button>
      <button onClick={props.click4}></button>
      <button onClick={props.click2}></button>
      <button onClick={props.click3}></button>
    </div>
  )
}




export default connect(mapStateToProps, mapDispatchToProps)(HomePage);