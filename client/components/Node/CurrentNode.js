/**
 * ************************************
 *
 * @module  CurrentNode.js
 * @author team Kubermetrics
 * @date
 * @description Current Node component containing all data on current node.
 *
 * ************************************
 */
import React from 'react';
import { connect } from 'react-redux';
import './currentNode.style.css'
import NodeDialog from '../../Dialog/NodeDialog';



const mapStateToProps = state => ({
  currentNode: state.nodes.currentNode
})


const CurrentNode = (props) => {

  // Deconstruct currentNode from props passed down from Home Page
  const { currentNode } = props;

  // Ternary statement checking if current node exists - If so we will render more info button
  let renderNode = currentNode.name ? <NodeDialog node={currentNode} color='secondary' variant='contained' size='small'> More Node Info </NodeDialog>: undefined

  // Ternary statement checking if current node exists - If so we will render all default information
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