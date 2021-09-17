const express = require('express');
const app = express();
const path = require("path");
const client = require('prom-client');
const cors = require('cors');
const axios = require('axios');
const k8Controller = require('./controllers/k8Controller.js');


app.use(cors());
app.use(express.json());

console.log(client.collectDefaultMetrics());

app.use("/build", express.static(path.join(__dirname, "../build")));
app.use(express.static(__dirname + '/client/assets'));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

// k8s api test
// const k8s = require('@kubernetes/client-node');

// const kc = new k8s.KubeConfig();
// kc.loadFromDefault();

// const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

// k8sApi.listNamespacedPod('default').then((res) => {
//     console.log(res.body.items[0].metadata);
// });

app.get('/namespaceList', k8Controller.getNamespaceList, (req, res) => {
  res.status(201).send(res.locals.namespaceList);
});

app.get('/podList', k8Controller.getPodList, (req, res) => {
  res.status(201).send(res.locals.podList);
});

app.get('/serviceList', k8Controller.getServiceList, (req, res) => {
  res.status(201).send(res.locals.serviceList);
});

app.get('/ingressList', k8Controller.getIngressList, (req, res) => {
  res.status(201).send(res.locals.ingressList);
});

app.get('/deploymentList', k8Controller.getDeploymentList, (req, res) => {
  res.status(201).send(res.locals.deploymentList);
});

app.get('/nodeList', k8Controller.getNodeList, (req, res) => {
  res.status(201).send(res.locals.nodeList);
});

app.post('/customPods', k8Controller.getCustomPodList, (req, res) => {
  res.status(201).json(res.locals.customPodList)
});

app.post('/customServices', k8Controller.getCustomServiceList, (req, res) => {
  res.status(201).json(res.locals.serviceList)
});

app.post('/customIngresses', k8Controller.getCustomIngressList, (req, res) => {
  res.status(201).json(res.locals.ingressList)
});

app.post('/customDeployments', k8Controller.getCustomDeploymentList, (req, res) => {
  res.status(201).json(res.locals.deploymentList)
});


app.get('http://localhost:30000/getMetrics', async (req, res) => {
  console.log('Scraped');
  console.log(await client.register.getMetricsAsJSON())
  // console.log(await client.register.getMetricsAsJSON())
  //res.send(await client.register.getMetricsAsJSON());
});

app.listen(3080, async () => {
  // await axios.get('http://prometheus-service.monitoring.svc:8080/api/v1/query?query=container_processes&g0.tab=1&g0.stacked=0&g0.show_exemplars=0&g0.range_input=1h')
  // .then(res => console.log(res.data.data.result))
  // .catch(err => console.log('error in axios'));
  console.log('listening on port 3080');
});