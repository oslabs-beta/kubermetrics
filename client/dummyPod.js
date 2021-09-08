const dummyPod = {
  containers: ['container 1', 'container 2', 'container 3'],
  metadata: {
    namespace: 'test namespace',
    creationTimestamp: 'timestamp',
    uid: 'whatever uid means',
  },
  spec: {
    nodeName: 'node name',
    schedulerName: 'scheduler name',
  },
  status: {
    phase: 'status phase',
    startTime: 'start time',
    hostIP: 'host ip',
    podIP: 'pod ip',
  },
}


export default dummyPod;