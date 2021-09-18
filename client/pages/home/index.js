import { useEffect } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import PodsList from '../../components/Pods/PodsList';
import * as actions from '../../actions/actions';
import DeploymentList from '../../components/Deployments/DeploymentList';
import Header from '../../components/Header/Header';
import ServicesList from '../../components/Services/ServicesList';
import CurrentNode from '../../components/Node/CurrentNode';


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
  },
  clickTestCustom: async () => {
    let namespaces = await actions.fetchCustomPods("monitoring");
  },
  clickTestCustomServices: async () => {
    let namespaces = await actions.fetchCustomServices("monitoring");
  },
  clickTestCustomDeployments: async () => {
    let namespaces = await actions.fetchCustomDeployments("monitoring");
  },
})


const HomePage = (props) => {

  useEffect(() => {
    props.clickForPods();
    props.clickForDeployments();
    props.clickServices();
    props.clickForNodes();
    props.clickForIngresses();
    props.clickNamespaces();
  }, [])

  return (
    <div className='homePage'>
      {/* <Navbar></Navbar> */}
      {/* <NavBar /> */}
        <Header/>
      <div className='homepageContent'>
        <CurrentNode />
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
      <button className='btn' onClick={props.clickTestCustom}>Test custom</button>
      <button className='btn' onClick={props.clickTestCustomServices}>Test custom</button>
      <button className='btn' onClick={props.clickTestCustomDeployments}>Test custom</button>
    </div>
  )
}




export default connect(mapStateToProps, mapDispatchToProps)(HomePage);