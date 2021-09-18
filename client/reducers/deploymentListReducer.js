/**
 * ************************************
 *
 * @module  deploymentListReducer
 * @author
 * @date
 * @description reducer for deployments list
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes';
 import dummyDeploy from '../dummyDeploy';

 const initialState = {
  deployments: []
};

const deploymentListReducer = (state = initialState, action) => {

  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case types.GET_DEPLOYMENTS:
      console.log('deployments got')
      console.log(payload);
      return { ...state, deployments: action.payload }

    default:
      return state;
        
  }
}

export default deploymentListReducer;