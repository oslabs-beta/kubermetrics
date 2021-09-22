
/**
 * ************************************
 *
 * @module servicesListReducer
 * @author team Kubermetrics
 * @date
 * @description reducer for service list
 *
 * ************************************
 */
import * as types from '../constants/actionTypes';


const initialState = {
  services: []
}

const servicesListReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_SERVICES:
      return {...state, services: action.payload}

    default:
      return state;
  }
}

export default servicesListReducer;