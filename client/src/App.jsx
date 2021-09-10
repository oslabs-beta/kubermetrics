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
  }
})

class App extends React.Component {
  render () {
    console.log(this.props)
    
    return (
      <div>
        <HomePage state={{...this.props}}/>
        <button onClick={this.props.click}></button>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);