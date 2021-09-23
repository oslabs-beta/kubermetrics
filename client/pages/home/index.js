/**
 * ************************************
 *
 * @module  index.js 
 * @author team Kubermetrics
 * @date
 * @description Home Page Element for React Router
 *
 * ************************************
 */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import PodsList from '../../components/Pods/PodsList';
import * as actions from '../../actions/actions';
import DeploymentList from '../../components/Deployments/DeploymentList';
import Header from '../../components/Header/Header';
import ServicesList from '../../components/Services/ServicesList';
import CurrentNode from '../../components/Node/CurrentNode';


// Map dispatch to props to handle state change on Load - This will ensure Home Page will populate with all relevant data on load. 

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
})


const HomePage = (props) => {

  // Utilize React useEffect to handle API calls on load 
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
        <Header/>
      <div className='homepageContent'>
        <div className='nd'>
        <CurrentNode />
        <DeploymentList/>
        </div>
        <PodsList/>
        <ServicesList/>
      </div>
    </div>
  )
}




export default connect(null, mapDispatchToProps)(HomePage);