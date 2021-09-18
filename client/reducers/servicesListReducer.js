// import * as actions from '../../actions/actions';
import * as types from '../constants/actionTypes';
import dummyService from '../dummyService';

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