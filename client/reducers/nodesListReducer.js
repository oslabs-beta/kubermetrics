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

 const initialState = {
  nodes: []
};

const nodesListReducer = (state = initialState, action) => {

  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case types.GET_NODES:
      console.log('nodes got')
      console.log(payload);
      return { ...state, nodes: action.payload }

    default:
      return state;
        
  }
}

export default nodesListReducer;