// import * as actions from '../../actions/actions';
import * as types from '../constants/actionTypes';

const initialState = {
  services: []
}

const servicesListReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_SERVICES:
      console.log('got services')
      console.log('payload: ', action.payload)
      return {...state, services: action.payload}

    default:
      return state;
  }
}

export default servicesListReducer;