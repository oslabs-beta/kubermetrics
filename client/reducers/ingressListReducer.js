/**
 * ************************************
 *
 * @module  ingressList
 * @author
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
  console.log(action);

  switch (type) {
    case types.GET_INGRESS:
      console.log('ingresses got')
      console.log(payload)
      // const { items } = payload.data;
      // const podArray = [];
      return { ...state, ingresses: action.payload }

    default:
      return state;
        
  }
}

export default ingressListReducer;