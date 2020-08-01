const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

// Serve any static files
app.use(express.static(path.join(__dirname, './client/build')));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('*', (req, res)=>{
  res.send('<h1>Not found!!!</h1>')
})
app.listen(port, ()=>{
  console.log(`Server listening on the port ${port}`)
})