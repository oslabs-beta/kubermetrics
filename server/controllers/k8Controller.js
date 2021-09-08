const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();


const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const k8sApi2 = kc.makeApiClient(k8s.ExtensionsV1beta1Api);
const k8sApi3 = kc.makeApiClient(k8s.AppsV1Api);

const k8Controller = {

  // async getMetrics (req, res, next) {
    
  // }

  async getPodList (req, res, next) {
    try {
      const result = await k8sApi.listNamespacedPod('default')
      res.locals.podList = result.body;
      return next();
    } catch (err) {
      console.log("Error in getPodList: ", err);
      next();
    }
  },

  async getServiceList (req, res, next) {
    k8sApi.listNamespacedService('default')
      .then
  }



}

export default k8Controller;