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

export const getNamespaceList = namespaceList => ({
  type: actionTypes.GET_NAMESPACELIST,
  payload: namespaceList,
});

export const getPods = podsList => ({
  type: actionTypes.GET_PODS,
  payload: podsList,
});

export const getNodes = nodesList => ({
  type: actionTypes.GET_NODES,
  payload: nodesList
});

export const getDeployments = deploymentList => ({
  type: actionTypes.GET_DEPLOYMENTS,
  payload: deploymentList
});

export const changeNode = node => ({
  type: actionTypes.CHANGE_NODE,
  payload: node
})
export const getServices = serviceList => ({
  type: actionTypes.GET_SERVICES,
  payload: serviceList
});

export const changeNamespace = namespace => ({
  type: actionTypes.CHANGE_NAMESPACE,
  payload: namespace
})

export const fetchPods = async (url = '/podList') => {

  let response = await axios.get(url);
  // console.log(response);
  let podsList = [];

  response.data.items.forEach((item) => {
    podsList.push({
      allData: item,
      apiVersion: response.data.apiVersion,
      nodeName: item.spec.nodeName,
      label: item.metadata.labels.app,
      podName: item.metadata.name,
      namespace: item.metadata.namespace,
      uid: item.metadata.uid,
      created: item.metadata.creationTimestamp,
      containers: item.spec.containers,
      serviceAccount: item.spec.serviceAccount,
      serviceAccountName: item.spec.serviceAccountName,
      hostIP: item.status.hostIP,
      podIP: item.status.podIP,
      phase: item.status.phase
    })
  })

  return podsList;

};

export const getIngress = ingressList => ({
  type: actionTypes.GET_INGRESS,
  payload: ingressList,
});

export const fetchIngress = async (url = '/ingressList') => {

  const response = await axios.get(url);
  // console.log(response)

  const { items } = response.data;
  const { metadata, spec } = items[0];

  const ingressList = {
    metadata: {
      class: metadata.annotations['kubernetes.io/ingress.class'],
      creationTime: metadata.creationTimestamp,
      name: metadata.name,
      namespace: metadata.namespace,
      uid: metadata.uid,
    },
    host: spec.rules[0].host,
    paths: spec.rules[0].http.paths.map((path) => ({
      pathType: path.pathType,
      serviceName: path.backend.serviceName,
      servicePort: path.backend.servicePort,
      path: path.path,
    })),
    fullData: items,
  };

  return ingressList;

};
export const fetchNodes = async (url = '/nodeList') => {

  let response = await axios.get(url);
  let nodeList = [];

  response.data.items.forEach((item) => {

    const { metadata, status } = item;
    const { labels } = metadata;


    nodeList.push({

      allData: item,
      created: metadata.creationTimestamp,
      arch: labels['kubernetes.io/arch'],
      os: labels['kubernetes.io/os'],
      hostname: labels['kubernetes.io/hostname'],
      managedFields: metadata.managedFields,
      name: metadata.name,
      resourceVersion: metadata.resourceVersion,
      uid: metadata.uid,
      addresses: status.addresses,
      allocatable: status.allocatable,
      capacity: status.capacity,
      conditions: status.conditions,
      daemonEndpoints: status.daemonEndpoints,
      images: status.images,
      nodeInfo: status.nodeInfo,

    })
  });

  return nodeList;

}

export const fetchDeployments = async (url = '/deploymentList') => {

  let response = await axios.get(url);
  let deploymentList = [];

  response.data.items.forEach((item) => {

    const { metadata, spec, status } = item;

    deploymentList.push({

      allData: item,
      created: metadata.creationTimestamp,
      managedFields: metadata.managedFields,
      name: metadata.name,
      namespace: metadata.namespace,
      uid: metadata.uid,
      replicas: spec.replicas,
      selector: spec.matchLabels,
      strategy: spec.strategy,
      template: spec.template,
      availabeReplicas: status.availabeReplicas,
      conditions: status.conditions,
      readyReplicas: status.readyReplicas

    })
  });

  return deploymentList;

}

export const fetchServices = async (url = '/serviceList') => {
  let response = await axios.get(url);

  // console.log('response: ', response)
  // console.log('response.data: ', response.data)
  console.log('response.data.items: ', response.data.items)
  let servicesList = [];

  response.data.items.forEach((item) => {

    servicesList.push({
      allData: item,
      created: item.metadata.creationTimestamp,
      name: item.metadata.name,
      namespace: item.metadata.namespace,
      id: item.metadata.uid,
      manager: item.metadata.managedFields.manager,
      labels: item.metadata.labels,
      selector: item.spec.selector,
      type: item.spec.type

    })

  });

  return servicesList;
}


export const fetchNamespaces = async (url = '/namespaceList') => {
  let response = await axios.get(url);

  // console.log('response: ', response)
  console.log('response.data: ', response.data)
  console.log('response.data.items: ', response.data.items)
  let namespaceList = [];

  response.data.items.forEach((item) => {

    namespaceList.push({
      allData: item,
      name: item.metadata.name
    })

  });

  return namespaceList
}

export const fetchCustomPods = async (namespace, url = '/customPods') => {
  let response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({namespace: namespace})
  })
  .then(res => res.json())
  .then(data => data);
  console.log(response)

  let podsList = [];

  response.items.forEach((item) => {
    podsList.push({
      allData: item,
      apiVersion: response.apiVersion,
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
  console.log(podsList)
  return podsList;

}

export const fetchCustomServices = async (namespace, url = '/customServices') => {
  let response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({namespace: namespace})
  })
  .then(res => res.json())
  .then(data => data);

  let servicesList = [];

  response.items.forEach((item) => {

    servicesList.push({
      allData: item,
      created: item.metadata.creationTimestamp,
      name: item.metadata.name,
      namespace: item.metadata.namespace,
      id: item.metadata.uid,
      manager: item.metadata.managedFields.manager,
      labels: item.metadata.labels,
      selector: item.spec.selector,
      type: item.spec.type

    })

  });

  console.log(servicesList)

  return servicesList;

}

export const fetchCustomDeployments = async (namespace, url = '/customDeployments') => {
  let response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({namespace: namespace})
  })
  .then(res => res.json())
  .then(data => data);

  let deploymentList = [];

  response.items.forEach((item) => {

    const { metadata, spec, status } = item;

    deploymentList.push({

      allData: item,
      created: metadata.creationTimestamp,
      managedFields: metadata.managedFields,
      name: metadata.name,
      namespace: metadata.namespace,
      uid: metadata.uid,
      replicas: spec.replicas,
      selector: spec.matchLabels,
      strategy: spec.strategy,
      template: spec.template,
      availabeReplicas: status.availabeReplicas,
      conditions: status.conditions,
      readyReplicas: status.readyReplicas

    })
  });

  console.log(deploymentList)

  return deploymentList;


}
