/**
 * ************************************
 *
 * @module  index.js
 * @author team Kubermetrics
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
  namespaces: namespaceListReducer,
  pods: podsListReducer,
  ingresses: ingressListReducer,
  nodes: nodesListReducer,
  deployments: deploymentListReducer,
  services: servicesListReducer,
});

export default reducers;