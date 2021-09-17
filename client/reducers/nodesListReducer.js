/**
 * ************************************
 *
 * @module  nodesListReducer
 * @author
 * @date
 * @description reducer for pods list
 *
 * ************************************
 */

 import { PermCameraMic } from '@material-ui/icons';
import * as types from '../constants/actionTypes';
 import dummyNode from '../dummyNode'

 const dummyNode2 = {
   ...dummyNode,
   name: 'testName 2'
 }

 const initialState = {
  nodes: [dummyNode, dummyNode2],
  currentNode: dummyNode
};

const nodesListReducer = (state = initialState, action) => {

  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case types.GET_NODES:
      console.log('nodes got')
      console.log(payload);
      return { ...state, nodes: action.payload, currentNode: action.payload[0] };

    case types.CHANGE_NODE:
      console.log('changed current node');
      console.log(payload);
      let newCurrent;
      state.nodes.forEach((node) => {
        if (node.name === payload) newCurrent = node;
      });
      return { ...state, currentNode: newCurrent}

    default:
      return state;
        
  }
}

export default nodesListReducer;