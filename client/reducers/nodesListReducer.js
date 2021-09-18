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

import * as types from '../constants/actionTypes';
import dummyNode from '../dummyNode'

 const dummyNode2 = {
   ...dummyNode,
   name: 'testName 2'
 }

 const initialState = {
  nodes: [],
  currentNode: {}
};

const nodesListReducer = (state = initialState, action) => {

  const { type, payload } = action;
 

  switch (type) {
    case types.GET_NODES:
      return { ...state, nodes: action.payload, currentNode: action.payload[0] };

    case types.CHANGE_NODE:
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