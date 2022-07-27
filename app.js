require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const morganBody = require("morgan-body");
const { dbConnectMysql } = require("./config/mysql");
const { IncomingWebhook } = require("@slack/webhook");
const app = express();
require("./routes/inmuebles");
require("./routes/propietarios");
require("./routes/files");
var fs = require('fs');

var options = {
  key: fs.readFileSync('./rucampoPrivate.key'),
  cert: fs.readFileSync('./rucampoCert.crt')
};

app.use((err, req, res, next)=>{
  res.status(err.status || 500);
  res.send({
      'message': err.message
  });
})

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

// const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK);

// const loggerStream = {
//   write: (message) => {
//     webhook.send({
//       text: message,
//     });

//     console.log("Capturando mensaje", message);
//   },
// };

// morganBody(app, {
//   noColors: true,
//   stream: loggerStream,
//   skip: function (req, res) {
//     return res.status < 400;
//   },
// });
const port = process.env.PORT || 3001;

//Routes

// app.use("/api", require("./routes"));
app.use("/api/inmuebles", require("./routes/inmuebles"));
app.use("/api/propietarios", require("./routes/propietarios"));
app.use("/api/files", require("./routes/files"));

const https = require('https').createServer(options,app);

https.listen(port);

// dbConnect();
dbConnectMysql();
