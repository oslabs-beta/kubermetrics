import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export const getPods = data => ({
  type: actionTypes.GET_PODS,
  payload: data,
});