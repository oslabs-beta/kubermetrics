import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
import HomePage from '../pages/home/index.js'
import { createTheme, ThemeProvider } from '@material-ui/core'

const darkTheme = createTheme({"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"rgba(26, 30, 33, 1)","default":"#fafafa"},"primary":{"light":"rgba(149, 106, 239, 1)","main":"rgba(113, 53, 240, 1)","dark":"rgba(91, 20, 240, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(239, 84, 149, 1)","main":"rgba(245, 6, 107, 1)","dark":"rgba(195, 0, 82, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(255, 255, 255, 0.54)","disabled":"rgba(255, 255, 255, 0.38)","hint":"rgba(255, 255, 255, 0.38)"}}})


const mapStateToProps = state => ({
  pods: state.pods.pods
})

const mapDispatchToProps = dispatch => ({
  click: async () => {
    let pods = await actions.fetchPods()
    dispatch(actions.getPods(pods))
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
          <button onClick={this.props.click2}></button>
          <button onClick={this.props.click3}></button>
        </div>
      </ThemeProvider>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);