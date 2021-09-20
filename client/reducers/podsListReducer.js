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

import * as types from '../constants/actionTypes';
import dummyPod from '../dummyPod.js'

const initialState = {
  pods: [dummyPod, dummyPod]
};

const podsListReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case types.GET_PODS:
      return { ...state, pods: action.payload }

    default:
      return state;

  }
}

export default podsListReducer;