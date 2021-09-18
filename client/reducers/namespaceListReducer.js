import * as types from '../constants/actionTypes';

const initialState = {
  namespaces: [],
  currentNamespace: {name: 'default'}
}

const namespaceListReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_NAMESPACELIST:
      return {...state, namespaces: action.payload, currentNamespace: action.payload[0]};

    case types.CHANGE_NAMESPACE:
      let newNamespace;
      state.namespaces.forEach((namespace) => {
        if (namespace.name === action.payload) newNamespace = namespace;
      });
      return {...state, currentNamespace: newNamespace}
    default:
      return state;
  }
}

export default namespaceListReducer;