/**
 * ************************************
 *
 * @module  deploymentListReducer
 * @author team Kubermetrics
 * @date
 * @description reducer for deployments list
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes';

 const initialState = {
  deployments: []
};

const deploymentListReducer = (state = initialState, action) => {

  const { type, payload } = action;


  switch (type) {
    case types.GET_DEPLOYMENTS:

      return { ...state, deployments: action.payload }

    default:
      return state;
        
  }
}

export default deploymentListReducer;