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
import DeploymentList from '../../components/Deployments/DeploymentList';
import Header from '../../components/Header/Header';
import ServicesList from '../../components/Services/ServicesList';


const mapStateToProps = state => ({
  pods: state.pods.pods
})

const mapDispatchToProps = dispatch => ({
  clickForPods: async () => {
    let pods = await actions.fetchPods()
    dispatch(actions.getPods(pods))
  },
  clickForIngresses: async () => {
    const ingresses = await actions.fetchIngress()
    dispatch(actions.getIngress(ingresses))
  },
  clickForNodes: async () => {
    let nodes = await actions.fetchNodes();
    dispatch(actions.getNodes(nodes))
  },
  clickForDeployments: async () => {
    let deployments = await actions.fetchDeployments();
    dispatch(actions.getDeployments(deployments));
  },
  clickServices: async () => {
    let services = await actions.fetchServices();
    dispatch(actions.getServices(services));
  },
  clickNamespaces: async () => {
    let namespaces = await actions.fetchNamespaces();
    dispatch(actions.getNamespaceList(namespaces));
  }
})


const HomePage = (props) => {
  return (
    <div className='homePage'>
      {/* <Navbar></Navbar> */}
      {/* <NavBar /> */}
        <Header/>
      <div className='homepageContent'>
        <DeploymentList/>
        <PodsList/>
        <ServicesList/>
      </div>
      <button className='btn' onClick={props.clickForPods}> get pods </button>
      <button className='btn' onClick={props.clickForIngresses}> get ingresses </button>
      <button className='btn' onClick={props.clickForNodes}> get nodes </button>
      <button className='btn' onClick={props.clickForDeployments}> get deployment </button>
      <button className='btn' onClick={props.clickServices}>Services</button>
      <button className='btn' onClick={props.clickNamespaces}>Namespace</button>
    </div>
  )
}




export default connect(mapStateToProps, mapDispatchToProps)(HomePage);