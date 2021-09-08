/**
 * ************************************
 *
 * @module  podsListReducer
 * @author
 * @date
 * @description reducer for pods list
 *
 * ************************************
 */

import { cloneElement } from 'react';
import * as types from '../constants/actionTypes';

const initialState = {
  pods: []
};

const podsListReducer = (state = initialState, action) => {

  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case types.GET_PODS:
      console.log('pods got')
      console.log(payload)
      // const { items } = payload.data;
      // const podArray = [];
      return { ...state, pods: payload }

    default:
      return state;
        
  }
}

export default podsListReducer;