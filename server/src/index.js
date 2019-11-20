import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const app = express();
// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,x-access-token,XKey,Authorization');
  next();
});
// Routes
app.use('/api', require('./routes/pet.router'));
app.use('/api', require('./routes/adoption.router'));
app.use('/api', require('./routes/breed.router'));
app.use('/api', require('./routes/authentication.router'));
app.use('/api', require('./routes/questions.router'));
app.use('/api', require('./routes/user.router'));
app.use('/api', require('./routes/accident.router'));

app.listen(4000, () => console.log('Server on port 4000'))