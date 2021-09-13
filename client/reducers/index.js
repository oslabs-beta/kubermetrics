/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import ingressListReducer from './ingressListReducer';
import podsListReducer from './podsListReducer'

const reducers = combineReducers({
  // if we had other reducers, they would go here
  pods: podsListReducer,
  ingresses: ingressListReducer,
});

// make the combined reducers available for import
export default reducers;