import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
import HomePage from '../pages/home/index.js'

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

class App extends React.Component {
  render () {
    console.log(this.props)
    
    return (
      <div>
        <HomePage state={{...this.props}}/>
        <button onClick={this.props.click}></button>
        <button onClick={this.props.click4}></button>
        <button onClick={this.props.click2}></button>
        <button onClick={this.props.click3}></button>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);