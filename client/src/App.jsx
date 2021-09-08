import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  pods: state.pods.pods
})

const mapDispatchToProps = dispatch => ({
  click: () => (dispatch(actions.getPods({test: 'Lets make it to the reducer baby'})))
})

class App extends React.Component {
  render () {
    console.log(this.props)
    
    return (
      <div>yo whats up
        <button onClick={this.props.click}></button>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);