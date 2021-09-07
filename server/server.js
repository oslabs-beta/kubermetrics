const express = require('express');
const app = express();
const path = require("path");
const client = require('prom-client');
const cors = require('cors');

app.use(cors());
app.use(express.json());


console.log(client.collectDefaultMetrics());


app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.get('http://localhost:30000/getMetrics', async (req, res) => {
  console.log('Scraped');
  console.log(await client.register.getMetricsAsJSON())
  // console.log(await client.register.getMetricsAsJSON())
  //res.send(await client.register.getMetricsAsJSON());
});

app.listen(3080, () => {
  console.log('listening on port 3080')
});