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
import nodesListReducer from './nodesListReducer'
import deploymentListReducer from './deploymentListReducer';
import servicesListReducer from './servicesListReducer';
import namespaceListReducer from './namespaceListReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  namespaces: namespaceListReducer,
  pods: podsListReducer,
  ingresses: ingressListReducer,
  nodes: nodesListReducer,
  deployments: deploymentListReducer,
  services: servicesListReducer,
});

// make the combined reducers available for import
export default reducers;