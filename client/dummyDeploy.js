 const dummyDeploy = {
  allData: 'item',
  created: 'metadata.creationTimestamp',
  managedFields: 'metadata.managedFields',
  name: 'metadata.name',
  namespace: 'metadata.namespace',
  uid: 'metadata.uid',
  replicas: 'spec.replicas',
  selector: 'spec.matchLabel',
  strategy: {type: 'Rolling Update'},
  template: {spec: {dnsPolicy: 'ClusterFirst', schedulerName: 'default-sheduler', restartPolicy:'Always'}},
  availabeReplicas: 'status.availabeReplicas',
  conditions: 'status.conditions',
  readyReplicas: 'status.readyReplicas'
 }

 export default dummyDeploy;