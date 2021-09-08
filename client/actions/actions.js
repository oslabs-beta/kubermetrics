/**
 * ************************************
 *
 * @module  actions.js
 * @author team Kubermetrics
 * @date
 * @description Action functions 
 *
 * ************************************
 */

import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export const getPods = data => ({
  type: actionTypes.GET_PODS,
  payload: data,
});

export const fetchPods = async (url = '/getPodsList') => {

  let podsList = await axios.get(url);
  return podsList;

};

