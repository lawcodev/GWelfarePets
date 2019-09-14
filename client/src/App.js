import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./components/Login/Login'));
const Register = React.lazy(() => import('./components/Register/Register'));
const Page404 = React.lazy(() => import('./components/NotFound/Page404'));
const Page500 = React.lazy(() => import('./components/ErrorServer/Page500'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Dashboard" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
