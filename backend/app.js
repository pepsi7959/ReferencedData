
const express = require('express');
const morgan = require('morgan');
const fs = require('fs')
const path = require('path')
global.appRoot = path.resolve(__dirname);
const process = require('./components/process/index.js');
const document = require('./components/document/index.js');
const agency = require('./components/agency/index.js');
const upload = require('./components/upload/index.js');
const conf = require('./config/production.conf');
const app = express();



// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, conf.accessLog), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use(express.json())

/**
 * Support OPTIONS
 */
app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, userid, token');
    res.send(200);
  });

app.use('/v1/upload', upload);

module.exports = app;
