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
import podsListReducer from './podsListReducer'
import nodesListReducer from './nodesListReducer'
import deploymentListReducer from './deploymentListReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  pods: podsListReducer,
  nodes: nodesListReducer,
  deployments: deploymentListReducer

});

// make the combined reducers available for import
export default reducers;