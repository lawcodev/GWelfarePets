const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParse = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const extjwt = require('express-jwt')

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "POST,DELETE")
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
});
// Routes
app.use('/api', require('./routes/pet.router'));
app.use('/api', require('./routes/breed.router'));
app.use('/api', require('./routes/authentication.router'));
app.use('/api', require('./routes/questions.router'));

module.exports = app;