const express = require('express');
const app = express();
const path = require("path");
const client = require('prom-client');
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(express.json());


console.log(client.collectDefaultMetrics());


app.use("/build", express.static(path.join(__dirname, "../build")));
// app.use(express.static(__dirname + '/client'));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.get('http://localhost:30000/getMetrics', async (req, res) => {
  console.log('Scraped');
  console.log(await client.register.getMetricsAsJSON())
  // console.log(await client.register.getMetricsAsJSON())
  //res.send(await client.register.getMetricsAsJSON());
});

app.listen(3080, async () => {
  await axios.get('http://prometheus-service.monitoring.svc:8080/api/v1/query?query=container_processes&g0.tab=1&g0.stacked=0&g0.show_exemplars=0&g0.range_input=1h')
  .then(res => console.log(res.data.data.result))
  .catch(err => console.log('error in axios'));
  console.log('listening on port 3080');
});