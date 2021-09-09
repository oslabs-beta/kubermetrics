const dummyPod = {
  apiVersion: "response.data.apiVersion",
  nodeName: 'item.spec.nodeName',
  label: 'item.metadata.labels.app',
  podName: 'item.metadata.name',
  namespace: 'item.metadata.namespace',
  uid: 'item.metadata.uid',
  created: 'item.metadata.creationTimestamp',
  containers: 'item.spec.containers',
  serviceAccount: 'item.spec.serviceAccount',
  serviceAccountName: 'item.spec.serviceAccountName',
  hostIP: 'item.status.hostIP',
  podIP: 'item.status.podIP',
  phase: 'item.status.phase'
}


export default dummyPod;