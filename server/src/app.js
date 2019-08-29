const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 4000);

// Middelawares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
// Routes
app.use('/api', require('./components/setting/settingServiceRouter'));
app.use('/api', require('./components/pet/petServiceRouter'));

// Static files
app.use(express.static(path.join(__dirname.replace('server','client'))));

module.exports = app;