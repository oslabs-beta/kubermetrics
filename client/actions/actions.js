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

import { LabelSharp } from '@material-ui/icons';
import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

export const getPods = podsList => ({
  type: actionTypes.GET_PODS,
  payload: podsList,
});

export const fetchPods = async (url = '/podList') => {

  let response = await axios.get(url);
  // console.log(response);
  let podsList = [];

  response.data.items.forEach((item) => {
    podsList.push({
      apiVersion: response.data.apiVersion,
      nodeName: item.spec.nodeName,
      label: item.metadata.labels.app,
      podName: item.metadata.name,
      namespace: item.metadata.namespace,
      uid: item.metadata.uid,
      created: item.metadata.creationTimestamp,
      containters: item.spec.containers,
      serviceAccount: item.spec.serviceAccount,
      serviceAccountName: item.spec.serviceAccountName,
      hostIP: item.status.hostIP,
      podIP: item.status.podIP,
      phase: item.status.phase
    })
  })

  return podsList;

};

