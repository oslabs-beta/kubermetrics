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
      const result = await k8sApi.listNamespacedPod('default');
      res.locals.podList = result.body;
      return next();
    } catch (err) {
      console.log("Error in getPodList: ", err);
      return next(err);
    }
  },

  async getServiceList (req, res, next) {
    try {
      const result = await k8sApi.listNamespacedService('default');
      res.locals.serviceList = result.body;
      return next();
    } catch (err) {
      console.log("Error in getServiceList: ", err);
      return next(err);
    }
  },

  async getIngressList (req, res, next) {
    try {
      const result = await k8sApi2.listNamespacedIngress('default');
      res.locals.ingressList = result.body;
      return next();
    } catch (err) {
      console.log("Error in getIngressList: ", err);
      return next(err);
    }
  },

  async getDeploymentList (req, res, next) {
    try {
      const result = await k8sApi3.listNamespacedDeployment('default');
      res.locals.deploymentList = result.body;
      return next();
    } catch (err) {
      console.log("Error in getDeploymentList: ", err);
      return next(err);
    }
  },

  async getNodeList (req, res, next) {
    try {
      const result = await k8sApi.listNode('default');
      res.locals.nodeList = result.body;
      try {
        const result2 = await k8sApi.listComponentStatus();
        res.locals.nodeList.nodeProcesses = result2;
        return next();
      } catch (err) {
        console.log("Error in getNodeList/nodeProcesses");
        return next(err);
      }
    } catch (err) {
      console.log("Error in getNodeList: ", err);
      return next(err);
    }
  },


}

module.exports = k8Controller;