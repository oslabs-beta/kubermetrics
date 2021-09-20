import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './currentNode.style.css'
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mapStateToProps = state => ({
  currentNode: state.nodes.currentNode
})


const CurrentNode = (props) => {

  const { currentNode } = props;

  return (
    <div className='currentNode'>
      <div className='miniHead'>
        <h4 className='miniHeadText'>Current Node</h4>
      </div>
      <div className='nodeInfo'>
      <p className='nodeListing'>{currentNode.name}</p>
      <p className='nodeListing'>{currentNode.os}</p>
      <p className='nodeListing'>{currentNode.hostname}</p>
      <p className='nodeListing'>{currentNode.resourceVersion}</p>
      <p className='nodeListing'>{currentNode.uid}</p>
      <Button color='secondary' size='small'> More Node Info </Button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, null)(CurrentNode)