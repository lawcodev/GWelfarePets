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

// Routes
app.use('/api', require('./components/setting/settingServiceRouter'));

// Static files
app.use(express.static(path.join(__dirname.replace('server','client'))));

module.exports = app;