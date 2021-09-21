import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './currentNode.style.css'
import Button from '@material-ui/core/Button';
import NodeDialog from '../../Dialog/NodeDialog';

const mapStateToProps = state => ({
  currentNode: state.nodes.currentNode
})


const CurrentNode = (props) => {

  



  const { currentNode } = props;
  let renderNode = currentNode.name ? <NodeDialog node={currentNode} color='secondary' variant='contained' size='small'> More Node Info </NodeDialog>: undefined
  let defaultInfo = currentNode.name ? (
    <div className='nodeInfo'>
    <p className='nodeListing'><b>Node Name: </b>{currentNode.name}</p>
    <p className='nodeListing'><b>Arch: </b>{currentNode.arch}</p>
    <p className='nodeListing'><b>OS: </b>{currentNode.os}</p>
    <p className='nodeListing'><b>Kernerl Version: </b>{currentNode.nodeInfo.kernelVersion}</p>
    <p className='nodeListing'><b>Kubelet Version: </b>{currentNode.nodeInfo.kubeletVersion}</p>
    <p className='nodeListing'><b>Container Runtime: </b>{currentNode.nodeInfo.containerRuntimeVersion}</p>
    </div>
  ) : undefined

  return (
    <div className='currentNode'>
      <div className='miniHead'>
        <h4 className='miniHeadText'>Current Node</h4>
      </div>
        {defaultInfo}
      <div className='becauseMuiReallyNeedsItsOwnDivToFixFormatting'>
      <center>{renderNode}</center>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, null)(CurrentNode)