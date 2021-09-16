import * as types from '../constants/actionTypes';

const initialState = {
  namespaces: [],
}

const namespaceListReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_NAMESPACELIST:
      return {...state, namespaces: action.payload};

    default:
      return state;
  }
}

export default namespaceListReducer;