const express = require('express');
const app = express();

function userCheck(req, res, next){
  console.log("userCheck");
  res.json("user");
  next();
}

function kidneyCheck(req, res, next){
  console.log("kidneyCheck");
  next();
}

app.use(userCheck);
app.use(kidneyCheck);

app.get('/health-checkup', function(req, res){
  res.send("3001 world");
})

app.get('/heart-checkup', function (req, res) {
  res.send("3001 world");
})

app.get('/kidney-checkup', function (req, res) {
  res.send("3001 world");
})

app.listen(3001);