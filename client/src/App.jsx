import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
import HomePage from '../pages/home/index.js'
import { createTheme, ThemeProvider } from '@material-ui/core'

const darkTheme = createTheme({"palette":{"common":{"black":"#000","white":"rgba(255, 255, 255, 1)"},"background":{"paper":"rgba(26, 30, 33, 1)","default":"rgba(255, 255, 255, 1)"},"primary":{"light":"rgba(45, 53, 55, 1)","main":"rgba(17, 22, 23, 1)","dark":"rgba(13, 15, 16, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(143, 96, 240, 1)","main":"rgba(113, 53, 240, 1)","dark":"rgba(96, 29, 239, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"rgba(208, 2, 27, 1)","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(255, 255, 255, 0.54)","disabled":"rgba(255, 255, 255, 0.38)","hint":"rgba(255, 255, 255, 0.38)"}}}
)


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
      <ThemeProvider theme={darkTheme}>
        <div>
          <HomePage state={{...this.props}}/>
          <button onClick={this.props.click}></button>
          <button onClick={this.props.click4}></button>
          <button onClick={this.props.click2}></button>
          <button onClick={this.props.click3}></button>
        </div>
      </ThemeProvider>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);