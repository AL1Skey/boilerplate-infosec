const express = require('express');
const app = express();


const test =1












































module.exports = app;
const api = require('./server.js');
const helmet = require('helmet');
const cors = require('cors')
app.use(cors())
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
