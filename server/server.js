const express = require('express');
const app = express();
const path = require("path");
const client = require('prom-client');
const cors = require('cors');
const axios = require('axios');
const k8Controller = require('./controllers/k8Controller.js');


app.use(cors());
app.use(express.json());

app.use("/build", express.static(path.join(__dirname, "../build")));
app.use(express.static(__dirname + '/client/assets'));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});



/* 

    All Routes Handling React Router Reload - Ensuring Page will Always Load

*/

app.get("/metrics", (req, res) => {
  return res.redirect('/');
});
app.get("/alerts", (req, res) => {
  return res.redirect('/');
});

/* 

    All Routes Handling K8S Cluster Scraping in Default Namespace

*/

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

/* 

    All Routes Handling K8S Cluster Scraping in Custom Namespace sent from Front End

*/


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



/* 

    Initialize Server on Port 3080

*/


app.listen(3080, async () => {
  console.log('listening on port 3080');
});