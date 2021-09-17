import * as types from '../constants/actionTypes';
import dummyNamespace from '../dummyNamespace';


const dum2 = {...dummyNamespace, name: 'monitoring'}
const dum3 = {...dummyNamespace, name: 'kube shit'}

const initialState = {
  namespaces: [dummyNamespace, dum2, dum3],
  currentNamespace: dummyNamespace
}

const namespaceListReducer = (state = initialState, action) => {
  console.log('action in namespace reducer =', action)
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