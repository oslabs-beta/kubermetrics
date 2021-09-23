/**
 * ************************************
 *
 * @module  ingressList
 * @author team Kubermetrics
 * @date
 * @description reducer for pods list
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  ingresses: [],
};

const ingressListReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case types.GET_INGRESS:
      return { ...state, ingresses: action.payload }
    default:
      return state;
        
  }
}

export default ingressListReducer;